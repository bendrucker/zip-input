# zip-input [![Build Status](https://travis-ci.org/bendrucker/zip-input.svg?branch=master)](https://travis-ci.org/bendrucker/zip-input)

> ZIP input component for virtual-dom

* Validates inputs using [zippo](https://github.com/bendrucker/zippo)
* Strips non-numeric characters
* Limits to 5 characters
* Triggers the [large numeric keypad](https://github.com/bendrucker/numeric-pattern) on mobile


## Install

```
$ npm install --save zip-input
```


## Usage

```js
var ZipInput = require('zip-input')
var zipInput = ZipInput()

function render (state) {
  var vtree = ZipInput.render(state)
  //=> use virtual-dom to patch vtree into real DOM
}

zipInput(render)
```

## API

#### `ZipInput(data)` -> `function`

Create a new ZIP input observable state.

##### data

Type: `object`

The initial state of the input.

###### value

Type: `string`

The ZIP code.

###### valid

Type: `boolean`

The validity of the ZIP code. Treat as read only.

#### `ZipInput.render(state, options) -> object`

Render a ZIP input state to a vtree object. `options` extend the defaults and are passed to [virtual-hyperscript](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript)


## License

MIT © [Ben Drucker](http://bendrucker.me)
