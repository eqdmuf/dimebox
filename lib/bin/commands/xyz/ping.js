'use strict'

exports.command = 'ping'
exports.desc = "Test current configuration against remote."
exports.handler = function(argv) {
  console.log("pinging.")
}
exports.builder = {}

