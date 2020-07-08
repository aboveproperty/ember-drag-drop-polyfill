ember-drag-drop-polyfill
==============================================================================

[![Build Status](https://travis-ci.org/aboveproperty/ember-drag-drop-polyfill.svg?branch=master)](https://travis-ci.org/aboveproperty/ember-drag-drop-polyfill)
[![npm version](https://badge.fury.io/js/ember-drag-drop-polyfill.svg)](http://badge.fury.io/js/ember-drag-drop-polyfill)

This addon brings [mobile-drag-drop](https://github.com/timruffles/mobile-drag-drop) into your Ember applications to polyfill drag and drop events for mobile browsers.

Installation
------------------------------------------------------------------------------

```
ember install ember-drag-drop-polyfill
```

For versions of Ember CLI < 2.15, 

```
ember install ember-drag-drop-polyfill@0.1.0
```

Usage
------------------------------------------------------------------------------

Configure what files are included in your build by modifying `ember-cli-build.js`.

Example:
```javascript
// ember-cli-build.js

var app = new EmberApp(defaults, {
  // Add options here

  "ember-drag-drop-polyfill": {
    includeCSS: true,
    includeIconsCss: false,
    includeDebugCss: true,
    includeScrollBehavior: false
  }
});
```

Pass configuration options through to [mobile-drag-drop](https://github.com/timruffles/mobile-drag-drop) by modifying `config/environment.js`.

Example:
```javascript
// config/environment.js 
var ENV = {

  // ...

  "ember-drag-drop-polyfill": {
    // These options are passed through to mobile-drag-drop
    mobileDragDrop: {
      enableEnterLeave: true,
      holdToDrag: 500, // Hold for 500ms until drag starts
    },
    // These options are used by ember-drag-drop-polyfill
    customOptions: {
      enableIOSHack: true, // Enable if targeting iOS Safari 10.x and higher, see https://github.com/timruffles/mobile-drag-drop/issues/77
      includeScrollBehavior: true // Sets the 'dragImageTranslateOverride' option in mobile-drag-drop with the scroll behavior imported from the includeScrollBehavior option in ember-cli-build.js.
    }                             // includeScrollBehavior must also be true in ember-cli-build.js to enable this
  },
  
  // ...
};
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
