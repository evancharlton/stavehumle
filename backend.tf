terraform {
  backend "gcs" {
    prefix = "stavehumle/terraform"
    bucket = "terraform-remote-backend-2180c2249d350f10"
  }
}
