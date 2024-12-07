terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4"
    }
    github = {
      source  = "integrations/github"
      version = "6.4.0"
    }
    google = {
      source  = "hashicorp/google"
      version = "6.12.0"
    }
  }
}

locals {
  # Zone IDs from Cloudflare
  zones = {
    "stavehumle.no"  = "724273dae49b8553e7f4aea61b15f010"
    "stavehumle.com" = "58b31b4b8039353d3e1b093037a8571f"
  }

  project = "stavehumle"

  main_domain = "stavehumle.no"
  redirects = [
    "stavehumle.com"
  ]

  github_challenge = "7529f02d6b4bbb75da2aff8d412322"
}

resource "github_repository" "stavehumle" {
  name         = "stavehumle"
  description  = "Finn ord i bikuben! 🐝"
  homepage_url = "https://${local.main_domain}"

  visibility                  = "public"
  has_discussions             = false
  has_downloads               = false
  has_issues                  = true
  allow_auto_merge            = true
  allow_merge_commit          = false
  allow_rebase_merge          = false
  allow_squash_merge          = true
  squash_merge_commit_title   = "PR_TITLE"
  squash_merge_commit_message = "PR_BODY"
  delete_branch_on_merge      = true

  license_template = "mit"

  pages {
    build_type = "workflow"
    cname      = local.main_domain
  }
}

variable "cloudflare_api_token" {
  default = ""
}

variable "github_token" {
  default = ""
}

variable "google_token" {
  default = ""
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "github" {
  token = var.github_token
}

provider "google" {
  project = "ordspill"
  region  = "europe-west10"
}

resource "local_file" "default" {
  file_permission = "0644"
  filename        = "${path.module}/backend.tf"

  # You can store the template in a file and use the templatefile function for
  # more modularity, if you prefer, instead of storing the template inline as
  # we do here.

  # TODO: Can we source the bucket name from somewhere?
  content = <<-EOT
  terraform {
    backend "gcs" {
      prefix = "${local.project}/terraform"
      bucket = "terraform-remote-backend-2180c2249d350f10"
    }
  }
  EOT
}

resource "cloudflare_record" "a_records" {
  for_each = toset([
    "185.199.111.153",
    "185.199.110.153",
    "185.199.109.153",
    "185.199.108.153"
  ])
  zone_id = local.zones[local.main_domain]
  content = each.value
  name    = local.main_domain
  proxied = true
  ttl     = 1
  type    = "A"
}

resource "cloudflare_record" "aaaa_records" {
  for_each = toset([
    "2606:50c0:8003::153",
    "2606:50c0:8002::153",
    "2606:50c0:8001::153",
    "2606:50c0:8000::153"
  ])
  zone_id = local.zones[local.main_domain]
  content = each.value
  name    = local.main_domain
  proxied = true
  ttl     = 1
  type    = "AAAA"
}

resource "cloudflare_record" "mail_records_dmarc" {
  for_each = setunion([local.main_domain], local.redirects)
  zone_id  = local.zones[each.value]
  name     = "_dmarc"
  content  = "'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;'"
  proxied  = false
  ttl      = 1
  type     = "TXT"
}

resource "cloudflare_record" "mail_records_domainkey" {
  for_each = setunion([local.main_domain], local.redirects)
  zone_id  = local.zones[each.value]
  name     = "*._domainkey"
  content  = "'v=DKIM1; p='"
  proxied  = false
  ttl      = 1
  type     = "TXT"
}

resource "cloudflare_record" "mail_records_spf" {
  for_each = setunion([local.main_domain], local.redirects)
  zone_id  = local.zones[each.value]
  name     = each.value
  content  = "'v=spf1 -all'"
  proxied  = false
  ttl      = 1
  type     = "TXT"
}

resource "cloudflare_record" "github_challenge" {
  zone_id = local.zones[local.main_domain]
  name    = "_github-pages-challenge-evancharlton"
  content = "'${local.github_challenge}'"
  proxied = false
  ttl     = 1
  type    = "TXT"
}

resource "cloudflare_record" "cnames_www" {
  for_each = setunion([local.main_domain], local.redirects)
  zone_id  = local.zones[each.value]
  name     = "www"
  content  = each.value
  proxied  = true
  ttl      = 1
  type     = "CNAME"
}