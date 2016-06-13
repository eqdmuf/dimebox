'use strict'

const log = require('loglevel')

log.setLevel('info')

let argv = require('yargs')
  .usage("Usage: dimebox <command> [options]")
  .env("DIMEBOX")
  .commandDir('../lib/bin/commands')
  .completion("completion", "Output .bashrc completion script.")
  .example('dimebox generate --machine vulcan exp.yml', "Generate job files for the experiment described in exp.yml for the machine 'vulcan'")
  .example('dimebox submit --machine vulcan HEAD', "Submit job files for the last generated experiment.")
  .demand(1)
  .boolean('v')
  .help()
  .argv

log.setLevel(argv.v ? 'debug' : 'info')
log.debug("Command line arguments: ", argv)

require('../xyz/push')()
