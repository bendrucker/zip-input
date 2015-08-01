# zip-input [![Build Status](https://travis-ci.org/bendrucker/zip-input.svg?branch=master)](https://travis-ci.org/bendrucker/zip-input)

> ZIP input component for virtual-dom

* Validates inputs using [zippo](https://github.com/bendrucker/zippo)
* Strips non-numeric characters
* Limits to 5 characters
* Triggers the [large numeric keypad](http://bradfrost.com/blog/mobile/better-numerical-inputs-for-mobile-forms/) on mobile


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

###### placeholder

Type: `string`

The placeholder to apply to the input.

#### `ZipInput.render(state) -> object`

Render a ZIP input state to a vtree object.


## License

MIT © [Ben Drucker](http://bendrucker.me)
