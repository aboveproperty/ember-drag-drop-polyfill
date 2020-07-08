'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {

    // nodeAssets must be the same as in index.js. It's only used for dummy app.
    // https://github.com/dfreeman/ember-cli-node-assets#for-addons
    nodeAssets: {
      'mobile-drag-drop': {
        vendor: {
          includes: [
            'debug.css',
            'default.css',
            'icons.css',
            'index.js',
            'index.min.js',
            'scroll-behaviour.js',
            'scroll-behavior.min.js'
          ]
        }
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
