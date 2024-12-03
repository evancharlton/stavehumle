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
  }
}

variable "cloudflare_api_token" {
  default = ""
}

variable "github_token" {
  default = ""
}

variable "zone" {
  type = object({
    domain  = string
    zone_id = string
  })

  default = {
    domain  = "stavehumle.no"
    zone_id = "724273dae49b8553e7f4aea61b15f010"
  }
}

locals {
  zones = {
    "stavehumle.no"  = "724273dae49b8553e7f4aea61b15f010"
    "stavehumle.com" = "58b31b4b8039353d3e1b093037a8571f"
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "github" {
  token = var.github_token
}

resource "cloudflare_record" "a_records" {
  for_each = {
    for val in setproduct(
      toset(["stavehumle.no"]),
      [
        "185.199.111.153",
        "185.199.110.153",
        "185.199.109.153",
        "185.199.108.153"
      ]
      ) : "${val[0]}-${val[1]}" => {
      domain = val[0]
      ip     = val[1]
    }
  }
  zone_id = local.zones[each.value.domain]
  content = each.value.ip
  name    = each.value.domain
  proxied = true
  ttl     = 1
  type    = "A"
}

resource "cloudflare_record" "aaaa_records" {
  for_each = {
    for val in setproduct(
      toset(["stavehumle.no"]),
      [
        "2606:50c0:8003::153",
        "2606:50c0:8002::153",
        "2606:50c0:8001::153",
        "2606:50c0:8000::153"
      ]
      ) : "${val[0]}-${val[1]}" => {
      domain = val[0]
      ip     = val[1]
    }
  }
  zone_id = local.zones[each.value.domain]
  content = each.value.ip
  name    = each.value.domain
  proxied = true
  ttl     = 1
  type    = "AAAA"
}

resource "cloudflare_record" "txt_records_no" {
  for_each = {
    # Tell recipients that this domain will never send email
    "_dmarc"                               = "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;",
    "*._domainkey"                         = "v=DKIM1; p=",
    "stavehumle.no"                        = "v=spf1 -all",
    "_github-pages-challenge-evancharlton" = "7529f02d6b4bbb75da2aff8d412322",
  }
  zone_id = local.zones["stavehumle.no"]
  name    = each.key
  content = each.value
  proxied = false
  ttl     = 1
  type    = "TXT"
}

resource "cloudflare_record" "txt_records_com" {
  for_each = {
    # Tell recipients that this domain will never send email
    "_dmarc"         = "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;",
    "*._domainkey"   = "v=DKIM1; p=",
    "stavehumle.com" = "v=spf1 -all",
  }
  zone_id = local.zones["stavehumle.com"]
  name    = each.key
  content = each.value
  proxied = false
  ttl     = 1
  type    = "TXT"
}

resource "cloudflare_record" "cname_no" {
  for_each = {
    "www" = "stavehumle.no"
  }
  zone_id = local.zones["stavehumle.no"]
  name    = each.key
  content = each.value
  proxied = true
  ttl     = 1
  type    = "CNAME"
}

resource "cloudflare_record" "cname_com" {
  for_each = {
    "@"   = "stavehumle.no"
    "www" = "stavehumle.no"
  }
  zone_id = local.zones["stavehumle.com"]
  name    = each.key
  content = each.value
  proxied = true
  ttl     = 1
  type    = "CNAME"
}

resource "github_repository" "stavehumle" {
  name        = "stavehumle"
  description = "Finn ord i bikuben"

  visibility         = "public"
  has_discussions    = false
  has_downloads      = false
  has_issues         = true
  allow_auto_merge   = true
  allow_merge_commit = false
  allow_rebase_merge = false
  delete_branch_on_merge = true

  pages {
    build_type = "workflow"
    cname      = "stavehumle.no"
  }
}