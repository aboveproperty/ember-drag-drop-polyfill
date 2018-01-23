import config from 'ember-get-config';
/* global DragDropPolyfill */

export function initialize(/* application */) {

  let options = config["ember-drag-drop-polyfill"] || {};

  if (typeof DragDropPolyfill !== 'undefined') {
    DragDropPolyfill.Initialize(options);
  }
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
