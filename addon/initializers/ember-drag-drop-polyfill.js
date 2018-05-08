import config from 'ember-get-config';
import { polyfill } from 'mobile-drag-drop';

export function initialize(/* application */) {

  let options = config['ember-drag-drop-polyfill'] || {};
  polyfill(options);
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
