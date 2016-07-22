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
     * Defaults for all notifictaions
     * @param {Object}
     */
  defaults: any;
  
  /**
     * Notification names and their specific defaults
     * @param {Object}
     */
  notifications: any;
  
  /**
     * Configuration fanction for notifications
     *
     * @param  {[Object]} [incomming] The configuration object
     * @param  {[Config]} [base]      The optional base config to use
     *
     * @return {Config}           itself
     *
     * @chainable
     */
  configure(incomming?: any, base?: any): any;
}
export declare function configure(aurelia?: any, config?: any): any;

/**
 * The Notification class. Notify using humane-js with your custom names and defaults
 */
export declare class Notification {
  
  /**
       * Notify 'note' (translated if applicable) using humane.log.
       *
       * @param {String|String[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       * @return {Promise}
       *
       */
  note(message?: any, options?: any, defaults?: any): any;
  
  /**
       * Notify 'success' (translated if applicable) using humane.log.
       *
       * @param {String|String[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       * @return {Promise}
       *
       */
  success(message?: any, options?: any, defaults?: any): any;
  
  /**
       * Notify 'error' (translated if applicable) using humane.log.
       *
       * @param {String|String[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       * @return {Promise}
       *
       */
  error(message?: any, options?: any, defaults?: any): any;
  
  /**
       * Notify 'info' (translated if applicable) using humane.log.
       *
       * @param {String|String[]}  message|multi-line message.
       * @param {{}}               [options] for this particular notification.
       * @param {{}}               [defaults] for this type of notification.
       *
       * @return {Promise}
       *
       */
  info(message?: any, options?: any, defaults?: any): any;
  
  /**
     * Creates a Notification instance
     *
     * @param  {[Config]} config
     * @param  {[Humane]} humane
     * @param  {[I18N]}   i18N
     *
     * @constructor
     */
  constructor(config?: any, humane?: any, i18n?: any);
  
  /**
     * Define a non-enumerable property on the notification.
     *
     * @param {string}  property
     * @param {*}       value
     * @param {boolean} [writable]
     *
     * @return {Notification}
     *
     * @readonly
     */
  define(property?: any, value?: any, writable?: any): any;
  
  /**
     * Set the container for the notifications
     *
     * @param {[DOM.node]}  [container] for the notifications
     *
     * @return {DOM.node}  [container]
     *
     * @readonly
     */
  setContainer(container?: any): any;
  
  /**
     * Set the base css class for the notifications
     *
     * @param {[string]}  [base class] for the notifications (default=__config.defaults.baseCls)
     *
     * @return {string}  [base class]
     *
     * @readonly
     */
  setBaseCls(baseCls?: any): any;
  
  /**
     * Check if translate is on with given options
     *
     * @param {[{}]}  [options] for a particular notification.
     * @param {[{}]}  [defaults] for a type of notifications.
     *
     * @return {Boolean}
     *
     * @readonly
     */
  translate(options?: any, defaults?: any): any;
  
  /**
     * Notify (translated if applicable) using humane.log.
     *
     * @param {String|String[]}  message|multi-line message.
     * @param {{}}               [options] for this particular notification.
     * @param {{}}               [defaults] for this type of notification.
     *
     * @return {Promise}
     *
     * @readonly
     */
  log(message?: any, options?: any, defaults?: any): any;
  
  /**
     * Set a custom shortcut for .log with defaults based on global defaults
     *
     * @param {String|{}}  [defaults] for this shortcut.
     *                     A string evaluates to {'addnCls': defaults}
     *
     * @return {function(message, options)}
     *
     * @readonly
     *
     */
  spawn(addnDefaults?: any): any;
  
  /**
     * Force remove humane log
     *
     * @return {Promise}
     *
     * @readonly
     */
  remove(): any;
}