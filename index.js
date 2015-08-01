'use strict'

var zip = require('zippo')
var State = require('dover')
var Observ = require('observ')
var pipe = require('value-pipe')
var changeEvent = require('value-event/change')
var h = require('virtual-dom/h')

module.exports = ZipInput

function ZipInput (data) {
  data = data || {}
  var state = State({
    value: Observ(data.value || ''),
    valid: Observ(zip.validate(data.value || '')),
    placeholder: Observ(data.placeholder || ''),
    channels: {
      change: change
    }
  })

  state.value(pipe(zip.validate, state.valid.set))

  return state
}

function change (state, data) {
  state.value.set(zip.parse(data.zip))
}

ZipInput.render = function render (state) {
  return h('input', {
    type: 'text',
    name: 'zip',
    value: state.value,
    placeholder: state.placeholder,
    // trigger the big number keyboard on mobile
    pattern: '[0-9]*',
    'ev-event': changeEvent(state.channels.change)
  })
}
