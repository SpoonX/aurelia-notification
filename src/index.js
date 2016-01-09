export {Notification} from './notification';
import {Config} from './config';

export function configure(aurelia, config) {
  return config(aurelia.container.get(Config));
}
