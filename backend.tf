terraform {
  backend "gcs" {
    prefix = "stavehumle/terraform"
    bucket = "ordspill-terraform-remote-backend"
  }
}
