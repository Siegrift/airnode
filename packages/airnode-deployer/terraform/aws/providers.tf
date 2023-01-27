terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.52"
    }
  }

  required_version = "~> 1.2"
}

provider "aws" {
  profile = "default"
  region  = var.aws_region
}
