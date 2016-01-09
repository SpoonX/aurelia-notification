import {Notification} from './notification';
import {Config} from './config';
export {Notification};

export function configure(aurelia, config) {
  return config(aurelia.container.get(Config));
}
