"use strict"

const init  = require('../../init')

module.exports = {
  command: 'init',
  desc: 'Initialize directory structure for experiments',

  builder: {},
  handler: (argv) => {
    init()
  }
}
