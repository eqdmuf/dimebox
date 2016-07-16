"use strict"

const fs      = require('fs'),
      path    = require('path'),
       _      = require('lodash'),
      log     = require('loglevel'),
      yaml    = require('js-yaml'),
      moment  = require('moment-twitter'),
      dirs    = require('../dirs'),
      model   = require('../modelBase.js'),
      epochUtils = require('./index.js'),

module.exports = function(epoch) {
  return model.ownerModel({
    runConfig: () => dirs.jobs(epoch, 'run.yml'),
    runFile: () => dirs.jobs(epoch, 'run.yml')
    // failDir: () => dirs.results(epoch, '.fail')
    // doneDir: () => dirs.results(epoch, '.done')
    // mdDir: () => dirs.results(epoch, '.md')
    // startedDir: () => dirs.results(epoch, '.started')


  },
  {

  })
  
}
