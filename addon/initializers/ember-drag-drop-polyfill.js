import config from 'ember-get-config';
import { polyfill } from 'mobile-drag-drop';

// optional import of scroll behaviour
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';

export function initialize(/* application */) {
  let passiveSupported = false;

  try {
    const opts = {
      get passive() { // This function will be called when the browser
        //   attempts to access the passive property.
        passiveSupported = true;
        return false;
      }
    };

    window.addEventListener("test", null, opts);
    window.removeEventListener("test", null, opts);
  } catch (err) {
    passiveSupported = false;
  }

  let options = config['ember-drag-drop-polyfill'] || {};

  if (options.includeScrollBehavior) {
    options.dragImageTranslateOverride = scrollBehaviourDragImageTranslateOverride;

    if (passiveSupported) {
      window.addEventListener('touchmove', function() {}, { passive: false });
    } else {
      window.addEventListener('touchmove', function() {});
    }
  }

  polyfill(options);
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
