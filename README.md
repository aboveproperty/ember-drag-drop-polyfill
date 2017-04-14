# ember-drag-drop-polyfill

This addon brings [drag-drop-polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim) into your Ember applications to polyfill drag and drop events for mobile browsers.

## Usage

```ember install ember-drag-drop-polyfill```

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

Pass configuration options through to to [drag-drop-polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim) by modifying `config/environment.js`.

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
