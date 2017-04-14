/* jshint node: true */
'use strict';

try {
  var stew = require('broccoli-stew');
  var log = stew.log;
} catch (er) {
  log = null;
}

module.exports = {
  name: 'ember-drag-drop-polyfill',

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
      includeScrollBehavior: false,
      dependencyFolder: "/drag-drop-polyfill"
    };

    var options = (app && app.options && app.options["ember-drag-drop-polyfill"]) || {};

    // Note: IE doesn't support Object.assign
    options = Object.assign(defaults, options);

    app.import({
      development: app.bowerDirectory + options.dependencyFolder + '/release/drag-drop-polyfill.js',
      production: app.bowerDirectory + options.dependencyFolder + '/release/drag-drop-polyfill.min.js'
    });

    if (options.includeCss) {
      app.import(app.bowerDirectory + options.dependencyFolder + '/release/drag-drop-polyfill.css');
    }

    if (options.includeIconsCss) {
      app.import(app.bowerDirectory + options.dependencyFolder + '/release/drag-drop-polyfill-icons.css');
    }

    if (options.includeDebugCss) {
      app.import(app.bowerDirectory + '/' + options.dependencyFolder + '/release/drag-drop-polyfill-debug.css');
    }

    if (options.includeScrollBehavior) {
      app.import({
        development: app.bowerDirectory + '/' + options.dependencyFolder + '/release/drag-drop-polyfill-scroll-behaviour.js',
        production: app.bowerDirectory + '/' + options.dependencyFolder + '/release/drag-drop-polyfill-scroll-behaviour.js'
      });
    }

    return app;
  }
};
