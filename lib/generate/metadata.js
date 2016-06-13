'use strict'

const exec = require('child_process').execSync,
    log     = require('loglevel'),
    uuid    = require('node-uuid')

function modules() {
  let modules = ""
  try {
    modules = exec("module list -l").toString()
  } catch (e) {
    console.log(e)
  }

  console.log("mods", modules)

  return modules
}

module.exports = function(exp) {
  const id = uuid.v4() 
  const env = process.env
  const mods = modules()

  return { id: id, env: env, modules: mods }
}
