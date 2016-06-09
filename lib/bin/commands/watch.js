"use strict"

const watch = require('../../watch'),
      guard = require('../../util/validate')

module.exports = {
  command: 'watch [options] <epoch>',
  desc: 'Monitor the status of results for a given epoch.',

  builder: (yargs) => {
    return yargs
      .option('interval', { default: 10000, describe: "Interval in ms to watch for changes"})
  },

  handler: (argv) => {
    guard()
    watch(argv.epoch, argv.interval)
  }
}
