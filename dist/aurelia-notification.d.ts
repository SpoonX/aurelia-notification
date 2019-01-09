import {inject} from 'aurelia-dependency-injection';
import {I18N} from 'aurelia-i18n';
import {DOM} from 'aurelia-pal';

/**
 * The Config class. Configures the notifications
 */
export declare class Config {
  
  /**
     * Translation on or off
     * @param {Boolean}
     */
  translate: any;
  
  /**
     * Defaults for all notifications
     * @param {{}}
     */
  defaults: any;
  
  /**
     * Notification names and their specific defaults
     * @param {{}}
     */
  notifications: any;
  configure(incoming?: any, base?: any): any;
}

/**
 * Plugin configure
 *
 * @export
 * @param {FrameworkConfiguration} frameworkConfig
 * @param {{}|function}            configOrConfigure
 */
export declare function configure(frameworkConfig?: any, configOrConfigure?: any): any;

/**
 * The Notification class. Notify using humane-js with your custom names and defaults
 */
export declare class Notification {
  
  /**
       * Notify 'note' (translated if applicable) using humane.log.
       *
       * @param {string|string[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       */
  note(message?: any, options?: any, defaults?: any): any;
  
  // eslint-disable-line  no-empty-function
  /**
       * Notify 'success' (translated if applicable) using humane.log.
       *
       * @param {string|string[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       */
  success(message?: any, options?: any, defaults?: any): any;
  
  // eslint-disable-line  no-empty-function
  /**
       * Notify 'error' (translated if applicable) using humane.log.
       *
       * @param {string|string[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       */
  error(message?: any, options?: any, defaults?: any): any;
  
  // eslint-disable-line  no-empty-function
  /**
       * Notify 'info' (translated if applicable) using humane.log.
       *
       * @param {string|string[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       */
  info(message?: any, options?: any, defaults?: any): any;
  
  // eslint-disable-line  no-empty-function
  /**
     * Creates a Notification instance
     *
     * @param {Config} config
     * @param {Humane} humane
     * @param {I18N}   i18n
     *
     * @constructor
     */
  constructor(config?: any, humane?: any, i18n?: any);
  
  /**
     * Define a non-enumerable property on the notification.
     *
     * @param {string}  property
     * @param {any}       value
     * @param {boolean} [writable]
     *
     * @return {Notification} itself
     *
     * @readonly
     */
  define(property?: any, value?: any, writable?: any): any;
  
  /**
     * Set the container for the notifications
     *
     * @param {[DOM.node]} [container] for the notifications
     *
     * @readonly
     */
  setContainer(container?: any): any;
  
  /**
     * Set the base css class for the notifications
     *
     * @param {[string]} [baseCls] the base class for the notifications (default=__config.defaults.baseCls)
     *
     * @readonly
     */
  setBaseCls(baseCls?: any): any;
  
  /**
     * Check if translate is on with given options
     *
     * @param {[{}]} [options] for a particular notification.
     * @param {[{}]} [defaults] for a type of notifications.
     *
     * @return {Boolean} status
     *
     * @readonly
     */
  translate(options?: any, defaults?: any): any;
  
  /**
     * Notify (translated if applicable) using humane.log. Resolves when closed.
     *
     * @param {string|string[]} message|multi-line message.
     * @param {{}}              [options] for this particular notification.
     * @param {{}}              [defaults] for this type of notification.
     *
     * @return {Promise}
     *
     * @readonly
     */
  log(message?: any, options?: any, defaults?: any): any;
  
  /**
     * Set a custom shortcut for .log with defaults based on global defaults
     *
     * @param {string|{}}  [defaults] for this shortcut.
     *                     A string evaluates to {'addnCls': defaults}
     *
     * @return {function(message, options)}
     *
     * @readonly
     *
     */
  spawn(addnDefaults?: any): any;
  
  /**
     * Force remove humane log. Resolves when closed.
     *
     * @return {Promise}
     *
     * @readonly
     */
  remove(): any;
}