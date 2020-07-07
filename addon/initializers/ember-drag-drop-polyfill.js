import config from 'ember-get-config';
import { polyfill } from 'mobile-drag-drop';

// optional import of scroll behaviour
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';

export function initialize(/* application */) {
  let passiveSupported = false;

  try {
    const opts = {
      // This function will be called when the browser attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }
    };

    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (err) {
    passiveSupported = false;
  }

  const options = config['ember-drag-drop-polyfill'] || {};
  const customOptions = options.customOptions || {};
  const mobileDragDropOptions = options.mobileDragDrop || {};

  // see https://github.com/timruffles/mobile-drag-drop/issues/77
  if (customOptions.enableIOSHack) {
    if (passiveSupported) {
      window.addEventListener('touchmove', function() {}, { passive: false });
    } else {
      window.addEventListener('touchmove', function() {});
    }
  }

  if (customOptions.includeScrollBehavior) {
    mobileDragDropOptions.dragImageTranslateOverride = scrollBehaviourDragImageTranslateOverride;
  }

  polyfill(mobileDragDropOptions);
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
