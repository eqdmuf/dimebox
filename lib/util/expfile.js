'use strict'

const fs    = require('fs'),
      log   = require('loglevel'),
      yaml  = require('js-yaml'),
      check = require('check-types')

function validateExp(exp) {
  if (!check.assigned(exp)) throw Error("Empty experiment")
  if (!check.assigned(exp.name)) throw Error("No name field")
  if (!check.assigned(exp.desc)) throw Error("No description")

  // processors
  if (!check.assigned(exp.p)) throw Error("No processor counts")
  if (check.emptyArray(exp.p)) throw Error("Processor counts must be an non-empty array")
  if (!check.array.of.number(exp.p)) throw Error("Processor counts must be an array of numbers")

  // cmds
  if (!check.assigned(exp.cmds)) throw Error("No cmds")
  if (!check.object.of.string(exp.cmds)) throw Error("Commands must be key-value pairs of name -> command")

  // optargs
  if (exp.optargs) {
    if (!check.object.of.array(exp.optargs)) throw Error("Optional args must be key-value pairs of arrays")
  }

  // weakargs
  if (exp.weakargs) {
    if (!check.object(exp.weakargs)) throw Error("Weak args must be key-value pairs")
  }

  // environment vars
  if (exp.env) {
    if (!check.object(exp.env)) throw Error("Environment variables must be key-value pairs")
  }
 
  // queues
  if (exp.q) {
    if (!check.object.of.number(exp.q)) throw Error("Queue must be key-value pairs of queue name and max processor count for that queue (inclusive)")
  }
}

function loadExpfile(filename) {
  // Try to read contents of file
  try {
    var contents = fs.readFileSync(filename)
    log.debug("Read in expfile ", filename)
  } catch(e) {
    log.error("Error: cannot open file", filename, "for reading")
    log.error(e.message)
    process.exit(1);
  }

  // Try to parse as YAML
  try {
    var exp = yaml.safeLoad(contents)
  } catch (e) {
    log.error(`Error: failed to parse ${filename} as a valid YAML file.`)
    log.error(e.message)
    process.exit(1)
  }

  // Provide defaults
  if (!exp.walltime) exp.wall = '00:30:00'
  if (!exp.name) exp.name = 'job'

  // Validate the experiment
  try {
    validateExp(exp)
  } catch (e) {
    log.error("Experiment configuration malformed:", e.message)
    process.exit(1)
  }

  return exp
}

module.exports = {
  loadExpfile: loadExpfile,
  validateExp:  validateExp
}