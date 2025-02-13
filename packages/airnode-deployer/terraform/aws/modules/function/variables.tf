locals {
  uuid        = uuid()
  tmp_dir     = "/tmp/${var.name}#${local.uuid}"
  tmp_archive = "/tmp/${var.name}#${local.uuid}.zip"
}

variable "handler" {
  description = "Lambda handler in a form of `file.function`"
}

variable "source_dir" {
  description = "Directory with the source code for lambda function"
}

variable "timeout" {
  description = "Lambda function timeout in seconds"
  default     = 10
}

variable "reserved_concurrent_executions" {
  description = "Amount of reserved concurrent executions for this lambda function"
  default     = -1
}

variable "invoke_targets" {
  description = "ARNs of other lambda functions that can be invoked from the lambda function"
  type        = list(string)
  default     = []
}

variable "schedule_interval" {
  description = "How often should the lambda function run in minutes"
  default     = 0
}

variable "name" {
  description = "Lambda name"
}

variable "memory_size" {
  description = "Lambda memory allocation"
}

variable "configuration_file" {
  description = "Airnode configuration file"
}

variable "secrets_file" {
  description = "Airnode secrets file"
}

variable "environment_variables" {
  description = "Additional Lambda environment variables"
  type        = map(any)
  default     = {}
}
