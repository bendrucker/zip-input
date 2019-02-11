'use strict'

var test = require('tape')
var thermometer = require('thermometer')
var raf = require('raf')
var dispatchEvent = require('dispatch-event')
var ZipInput = require('./')

var render = thermometer.createComponent(ZipInput)

test('state to dom', function (t) {
  t.plan(1)
  render(function (state, element, done) {
    state.value.set('94105')
    raf(function afterRender () {
      t.equal(element.value, '94105')
      done()
    })
  })
})

test('dom to state', function (t) {
  t.test('valid input', function (t) {
    t.plan(1)
    setValue('94105', function (state) {
      t.equal(state.value(), '94105')
    })
  })

  t.test('strip alpha', function (t) {
    t.plan(1)
    setValue('941aa', function (state) {
      t.equal(state.value(), '941')
    })
  })

  t.test('max 5 digits', function (t) {
    t.plan(2)
    setValue('94105999', function (state) {
      t.equal(state.value(), '94105')
      t.ok(ZipInput.validate(state))
    })
  })

  t.end()

  function setValue (value, callback) {
    render(function (state, element, done) {
      element.value = value
      dispatchEvent(element, 'input')
      raf(callback.bind(null, state))
    })
  }
})

test('valid', function (t) {
  var state = ZipInput()
  state.value.set('94')
  t.notOk(ZipInput.validate(state))
  state.value.set('94105')
  t.ok(ZipInput.validate(state))
  t.end()
})
