import {Config} from './config';

/**
 * Plugin configure
 *
 * @export
 * @param {FrameworkConfiguration} frameworkConfig
 * @param {{}|function}            configOrConfigure
 */
export function configure(frameworkConfig, configOrConfigure) {
  let config = frameworkConfig.container.get(Config);

  if (typeof configOrConfigure === 'function') {
    configOrConfigure(config);

    return;
  }

  config.configure(configOrConfigure);
}
