"use strict"

const parse = require('../../parse'),
      guard   = require('../../util/validate')

module.exports = {
  command: 'parse [options] <epoch>',
  desc: 'Parse results from a given epoch',

  builder: (yargs) => {
    return yargs
      .option('parser', { alias: 'p', default: 'default-key-value', describe: "Parser used to extract information from each line."})
      .option('tag', { alias: 't', default: 'default', describe: "The tag for the results to show."})
  },

  handler: (argv) => {
    guard()
    parse(argv.epoch, argv.tag, argv.parser)
  }
}
