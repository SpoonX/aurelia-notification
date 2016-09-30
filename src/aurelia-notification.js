import {Config} from './config';

/**
 * Plugin configure
 *
 * @export
 * @param {any} frameworkConfig
 * @param {any} configOrConfigure
 */
export function configure(frameworkConfig, configOrConfigure) {
  let config = frameworkConfig.container.get(Config);

  if (typeof configOrConfigure === 'function') {
    configOrConfigure(config);

    return;
  }

  config.configure(configOrConfigure);
}
