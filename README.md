# ember-drag-drop-polyfill
[![Build Status](https://travis-ci.org/aboveproperty/ember-drag-drop-polyfill.svg?branch=master)](https://travis-ci.org/aboveproperty/ember-drag-drop-polyfill)
[![npm version](https://badge.fury.io/js/ember-drag-drop-polyfill.svg)](http://badge.fury.io/js/ember-drag-drop-polyfill)

This addon brings [drag-drop-polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim) into your Ember applications to polyfill drag and drop events for mobile browsers.

## Usage

```ember install ember-drag-drop-polyfill```

For versions of Ember CLI < 2.15, 

```ember install ember-drag-drop-polyfill@0.1.0```

## Configuration

Configure what files are included in your build by modifying `ember-cli-build.js`.

Example:
```javascript
// ember-cli-build.js

var app = new EmberApp(defaults, {
  // Add options here

  ["ember-drag-drop-polyfill"]: {
    includeCSS: true,
    includeIconsCss: false,
    includeDebugCss: true,
    includeScrollBehavior: false,
  }
});
```

Pass configuration options through to [drag-drop-polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim) by modifying `config/environment.js`.

Example:
```javascript
// config/environment.js 
var ENV = {

  // ...

  "ember-drag-drop-polyfill": {
    enableEnterLeave: true,
    holdToDrag: false
  },
  
  // ...
};
```
