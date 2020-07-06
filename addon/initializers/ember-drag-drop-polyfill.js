import config from 'ember-get-config';
import { polyfill } from 'mobile-drag-drop';

// optional import of scroll behaviour
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';

export function initialize(/* application */) {

  let options = config['ember-drag-drop-polyfill'] || {};

  if (options.includeScrollBehavior) {
    options.dragImageTranslateOverride = scrollBehaviourDragImageTranslateOverride;
  }

  polyfill(options);
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
