'use strict'

var Input = require('base-input')
var zip = require('zippo')
var numeric = require('numeric-pattern')

module.exports = Input({
  parse: zip.parse,
  validate: zip.validate,
  options: {
    type: 'text',
    name: 'zip',
    pattern: numeric
  }
})
