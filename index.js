'use strict';

module.exports = {
  name: require('./package').name,

  // isDevelopingAddon() {
  //   return true;
  // },

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    var defaults = {
      includeCss: false,
      includeIconsCss: false,
      includeDebugCss: false,
      includeScrollBehavior: false
    };

    var options = (app && app.options && app.options["ember-drag-drop-polyfill"]) || {};

    options = Object.assign(defaults, options);

    app.import({
      development: 'vendor/mobile-drag-drop/index.js',
      production: 'vendor/mobile-drag-drop/index.min.js'
    }, {
      using: [
        { transformation: 'amd', as: 'mobile-drag-drop' }
      ]
    });

    if (options.includeCss) {
      app.import('vendor/mobile-drag-drop/default.css');
    }

    if (options.includeIconsCss) {
      app.import('vendor/mobile-drag-drop/icons.css');
    }

    if (options.includeDebugCss) {
      app.import('vendor/mobile-drag-drop/debug.css');
    }

    if (options.includeScrollBehavior) {
      app.import('vendor/mobile-drag-drop/scroll-behaviour.js');
    }

    return app;
  },
  options: {
    nodeAssets: {
      'mobile-drag-drop': {
        vendor: {
          includes: [
            'debug.css',
            'default.css',
            'icons.css',
            'index.js',
            'index.min.js',
            'scroll-behaviour.js'
          ]
        }
      }
    }
  }
};
