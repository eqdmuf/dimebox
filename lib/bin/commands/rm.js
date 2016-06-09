"use strict"

const rm    = require('../../rm'),
      guard = require('../../util/validate')

module.exports = {
  command: 'rm <epoch>',
  desc: 'Remove the jobs and results for a given epoch.',

  builder: {},
  handler: (argv) => {
    guard()
    rm(argv.epoch)
  }
}
