terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4"
    }
  }
}

variable "cloudflare_api_token" {
  default = ""
}

variable "zone_id" {
  default = "724273dae49b8553e7f4aea61b15f010"
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_record" "a_records" {
  for_each = toset([
    "185.199.111.153",
    "185.199.110.153",
    "185.199.109.153",
    "185.199.108.153"
  ])
  zone_id = var.zone_id
  content = each.value
  name    = "stavehumle.no"
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
  zone_id = var.zone_id
  content = each.value
  name    = "stavehumle.no"
  proxied = true
  ttl     = 1
  type    = "AAAA"
}

resource "cloudflare_record" "txt_records" {
  for_each = {
    # Tell recipients that stavehumle.no will never send email
    "_dmarc"        = "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;",
    "*._domainkey"  = "v=DKIM1; p=",
    "stavehumle.no" = "v=spf1 -all",
  }
  name    = each.key
  content = each.value
  proxied = false
  ttl     = 1
  type    = "TXT"
  zone_id = var.zone_id
}

resource "cloudflare_record" "cname_records" {
  for_each = {
    "www" = "stavehumle.no",
  }
  name    = each.key
  content = each.value
  proxied = true
  ttl     = 1
  type    = "CNAME"
  zone_id = var.zone_id
}
