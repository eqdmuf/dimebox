"use strict"

const summary = require('../../summary'),
      guard   = require('../../util/validate')

module.exports = {
  command: 'summary [epoch]',
  desc: 'Summary of experiment',

  builder: (yargs) => {
    return yargs
      .option('sample', { default: true, describe: "Print a sample job file."})
      .option('vc', { default: true, describe: "Print version control information."})
      .option('expfile', { default: true, describe: "Print experiment config YAML file."})
  },

  handler: (argv) => {
    guard()
    summary(argv.epoch, argv.sample, argv.vc, argv.expfile)
  }
}
