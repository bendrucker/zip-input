'use strict'

var zip = require('zippo')
var State = require('dover')
var Observ = require('observ')
var watch = require('observ/watch')
var pipe = require('value-pipe')
var changeEvent = require('value-event/change')
var h = require('virtual-dom/h')
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
  // trigger the big number keyboard on mobile
  pattern: '[0-9]*'
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
