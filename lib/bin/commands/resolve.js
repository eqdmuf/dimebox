"use strict"

const resolve = require('../../resolve'),
      guard   = require('../../util/validate')

module.exports = {
  command: 'resolve <epoch>',
  desc: 'Resolve a symbolic epoch to concrete epoch.',

  builder: {},
  handler: (argv) => {
    guard()
    resolve(argv.epoch)
  }
}
