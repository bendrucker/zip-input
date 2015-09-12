'use strict'

var zip = require('zippo')
var State = require('dover')
var Observ = require('observ')
var watch = require('observ/watch')
var pipe = require('value-pipe')
var changeEvent = require('value-event/change')
var h = require('virtual-dom/h')
var numeric = require('numeric-pattern')
var extend = require('xtend')

module.exports = ZipInput

function ZipInput (data) {
  data = data || {}
  var state = State({
    value: Observ(data.value || ''),
    valid: Observ(false),
    channels: {
      change: change
    }
  })

  watch(state.value, pipe(zip.validate, state.valid.set))

  return state
}

function change (state, data) {
  state.value.set(zip.parse(data[data.name]))
}

var defaults = {
  type: 'text',
  name: 'zip',
  pattern: numeric
}

ZipInput.render = function render (state, options) {
  options = extend(defaults, options || {})

  options = extend(options, {
    value: state.value,
    'ev-event': changeEvent(state.channels.change, {
      name: options.name
    })
  })

  return h('input', options)
}
