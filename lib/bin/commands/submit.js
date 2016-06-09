"use strict"

const submit = require('../../submit'),
      guard  = require('../../util/validate')

module.exports = {
  command: 'submit <epoch>',
  desc: 'Submit all jobs for an epoch',

  builder: (yargs) => {
    return yargs
      .option('machine', {
        alias: 'm',
        default: 'rain',
        describe: "The machine where the experiments will be run."
      })
    .boolean('dry-run')
    .describe('dry-run', "Only simulate submission of jobs.")
    .boolean('stagger')
    .describe('stagger', "Set up a chain of dependent jobs so that jobs will only be scheduled k at a time.")
    .boolean('v')
    .number('batch')
    .describe('batch', "Size of batch for staggered job submission.")
    .implies('batch', 'stagger')
  },

  handler: (argv) => {
    guard()
    const batch = argv.batch || 1
    submit(argv.machine, argv.epoch, argv['dry-run'], argv.stagger, batch);
  }
}
