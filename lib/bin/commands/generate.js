"use strict"

const generate = require('../../generate'),
      guard    = require('../../util/validate')

module.exports = {
  command: 'generate <experiment>',
  desc: "Generate job files",

  builder: (yargs) => {
    return yargs
      .option('machine', {
        alias: 'm',
        default: 'rain',
        describe: "The machine where the experiments will be run."
      })
    .boolean('vc')
    .describe('vc', "Grab version control information and store with jobs.")
    .default('vc', true)
    .boolean('v')
  },

  handler: (argv) => {
    guard()
    generate(argv.machine, argv.experiment, argv.vc)
  }
}
