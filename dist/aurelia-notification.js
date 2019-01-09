import extend from 'extend';
import Humane from 'humane-js';
import {inject} from 'aurelia-dependency-injection';
import {I18N} from 'aurelia-i18n';
import {DOM} from 'aurelia-pal';


/**
 * The Config class. Configures the notifications
 */
export class Config {
  /**
   * Translation on or off
   * @param {Boolean}
   */
  translate = true

  /**
   * Defaults for all notifications
   * @param {{}}
   */
  defaults = {}

  /**
   * Notification names and their specific defaults
   * @param {{}}
   */
  notifications = {
    note   : {},
    success: {addnCls: 'success'},
    error  : {addnCls: 'error'},
    info   : {addnCls: 'info'}
  }

  /**
   * Configuration function for notifications
   *
   * @param  {[{}]}     [incoming] The configuration object
   * @param  {[Config]} [base]     The optional base config to use
   *
   * @return {Config} itself
   *
   * @chainable
   */
  configure(incoming = {}, base = this) {
    this.translate     = 'translate' in incoming ? incoming.translate : base.translate;
    this.defaults      = extend({}, base.defaults, incoming.defaults);
    this.notifications = extend({}, base.notifications, incoming.notifications);

    return this;
  }
}

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

/**
 * Readonly decorator
 *
 * @returns {function}
 * @decorator
 *
 * @see https://github.com/AvraamMavridis/javascript-decorators/
 */
function readonly() {
  return function(key, target, descriptor) {
    descriptor.writable = false;

    return descriptor;
  };
}

/**
 * The Notification class. Notify using humane-js with your custom names and defaults
 */
@inject(Config, Humane, I18N)
export class Notification {

  /**
     * Notify 'note' (translated if applicable) using humane.log.
     *
     * @param {string|string[]}  message|multi-line message.
     * @param {{}}               [options] for this particular notification.
     * @param {{}}               [defaults] for this type of notification.
     *
     */
  note(message, options = {}, defaults = this.__config.defaults) {} // eslint-disable-line  no-empty-function

  /**
     * Notify 'success' (translated if applicable) using humane.log.
     *
     * @param {string|string[]}  message|multi-line message.
     * @param {{}}               [options] for this particular notification.
     * @param {{}}               [defaults] for this type of notification.
     *
     */
  success(message, options = {}, defaults = this.__config.defaults) {} // eslint-disable-line  no-empty-function

  /**
     * Notify 'error' (translated if applicable) using humane.log.
     *
     * @param {string|string[]}  message|multi-line message.
     * @param {{}}               [options] for this particular notification.
     * @param {{}}               [defaults] for this type of notification.
     *
     */
  error(message, options = {}, defaults = this.__config.defaults) {} // eslint-disable-line  no-empty-function

  /**
     * Notify 'info' (translated if applicable) using humane.log.
     *
     * @param {string|string[]}  message|multi-line message.
     * @param {{}}               [options] for this particular notification.
     * @param {{}}               [defaults] for this type of notification.
     *
     */
  info(message, options = {}, defaults = this.__config.defaults) {} // eslint-disable-line  no-empty-function

  /**
   * Creates a Notification instance
   *
   * @param {Config} config
   * @param {Humane} humane
   * @param {I18N}   i18n
   *
   * @constructor
   */
  constructor(config, humane, i18n) {
    this
      .define('__config', config)
      .define('__humane', humane)
      .define('__i18n', i18n);

    // set baseCls
    this.setBaseCls();

    // add configured default methods
    for (let key in config.notifications) {
      if (config.notifications.hasOwnProperty(key)) {
        this[key] = this.spawn(config.notifications[key]);
      }
    }

    // ensure humane.container is document.body after 'aurelia-composed'
    if (!humane.container) {
      this.setContainer();
      let aureliaComposedListener = () => {
        if (!humane.container) {
          this.setContainer();
        }
        DOM.removeEventListener('aurelia-composed', aureliaComposedListener);
      };

      DOM.addEventListener('aurelia-composed', aureliaComposedListener);
    }
  }

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
  @readonly()
  define(property, value, writable) {
    Object.defineProperty(this, property, {
      value     : value,
      writable  : !!writable,
      enumerable: false
    });

    return this;
  }

  /**
   * Set the container for the notifications
   *
   * @param {[DOM.node]} [container] for the notifications
   *
   * @readonly
   */
  @readonly()
  setContainer(container) {
    DOM.appendNode(this.__humane.el, container); // if container null or undefined,  appends to document.body
    this.__humane.container = this.__humane.el.parentNode;
  }

  /**
   * Set the base css class for the notifications
   *
   * @param {[string]} [baseCls] the base class for the notifications (default=__config.defaults.baseCls)
   *
   * @readonly
   */
  @readonly()
  setBaseCls(baseCls = this.__config.defaults.baseCls) {
    this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
  }

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
  @readonly()
  translate(options = {}, defaults = {}) {
    let joined = extend({}, this.__config, defaults, options);

    return joined.translate;
  }

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
  @readonly()
  log(message, options = {}, defaults = this.__config.defaults) {
    if (this.translate(options, defaults)) {
      if (message instanceof Array) {
        message = message.map(item => this.i18n.tr(item));
      } else {
        message = this.__i18n.tr(message);
      }
    }

    return new Promise(resolve => {
      return this.__humane.log(message, options, resolve, defaults);
    });
  }

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
  @readonly()
  spawn(addnDefaults) {
    addnDefaults = (typeof addnDefaults === 'string') ? {'addnCls': addnDefaults} : addnDefaults;
    let defaults = extend({}, this.__config.defaults, addnDefaults);

    return (message, options) => {
      return this.log(message, options, defaults);
    };
  }

  /**
   * Force remove humane log. Resolves when closed.
   *
   * @return {Promise}
   *
   * @readonly
   */
  @readonly()
  remove() {
    return new Promise(resolve => {
      return this.__humane.remove(resolve);
    });
  }
}
