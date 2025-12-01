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
    };

    var options =
      (app && app.options && app.options['ember-drag-drop-polyfill']) || {};

    options = Object.assign(defaults, options);

    app.import(
      {
        development: 'node_modules/mobile-drag-drop/index.js',
        production: 'node_modules/mobile-drag-drop/index.min.js',
      },
      {
        using: [
          {
            transformation: 'amd',
            as: 'mobile-drag-drop',
          },
        ],
      }
    );

    if (options.includeCss) {
      app.import('node_modules/mobile-drag-drop/default.css');
    }

    if (options.includeIconsCss) {
      app.import('node_modules/mobile-drag-drop/icons.css');
    }

    if (options.includeDebugCss) {
      app.import('node_modules/mobile-drag-drop/debug.css');
    }

    app.import(
      {
        development: 'node_modules/mobile-drag-drop/scroll-behaviour.js',
        production: 'node_modules/mobile-drag-drop/scroll-behaviour.min.js',
      },
      {
        using: [
          { transformation: 'amd', as: 'mobile-drag-drop/scroll-behaviour' },
        ],
      }
    );

    return app;
  },
  options: {},
};
