import {Config} from './config';
import Humane from 'humane-js';
import {inject} from 'aurelia-dependency-injection';
import {I18N} from 'aurelia-i18n';
import {readonly} from 'javascript-decorators';
import {DOM} from 'aurelia-pal';
import extend from 'extend';

@inject(Config, Humane, I18N)
export class Notification {

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
  note(message, options = {}, defaults = this.__config.defaults) {}

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
  success(message, options = {}, defaults = this.__config.defaults) {}

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
  error(message, options = {}, defaults = this.__config.defaults) {}

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
  info(message, options = {}, defaults = this.__config.defaults) {}


  /**
   * Construct.
   *
   * @param {Config} config
   * @param {Humane} humane
   * @param {i18N}   I18N
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
      this[key] = this.spawn(config.notifications[key]);
    }

    // ensure humane.container is document.body after 'aurelia-composed'
    this.setContainer();
    let aureliaComposedListener = () => {
      this.setContainer();
      DOM.removeEventListener('aurelia-composed', aureliaComposedListener);
    };
    DOM.addEventListener('aurelia-composed', aureliaComposedListener);
  }

  /**
   * Define a non-enumerable property on the Notification.
   *
   * @param {string}  property
   * @param {*}       value
   * @param {boolean} [writable]
   *
   * @return {Notification}
   */
  @readonly()
  define(property, value, writable) {
    Object.defineProperty(this, property, {
      value: value,
      writable: !!writable,
      enumerable: false
    });

    return this;
  }

  /**
   * Set the container for the notifications
   *
   * @param {[DOM.node]}  [container] for the notifications
   *
   * @return {DOM.node}  [container]
   *
   */
  @readonly()
  setContainer(container) {
    DOM.appendNode(this.__humane.el, container); // if container null or undefined,  appends to document.body
    this.__humane.container = this.__humane.el.parentNode;
    return this.__humane.container;
  }

  /**
   * Set the base css class for the notifications
   *
   * @param {[string]}  [base class] for the notifications (default=__config.defaults.baseCls)
   *
   * @return {string}  [base class]
   *
   */
  @readonly()
  setBaseCls(baseCls = this.__config.defaults.baseCls) {
    this.__humane.baseCls = baseCls ? baseCls : this.__humane.baseCls;
    return this.__humane.baseCls;
  }

  /**
   * Check if translate is on with given options
   *
   * @param {[{}]}  [options] for a particular notification.
   * @param {[{}]}  [defaults] for a type of notifications.
   *
   * @return {Boolean}
   *
   */
  @readonly()
  translate(options = {}, defaults = {}) {
    let joined = extend({}, this.__config, defaults, options);
    return joined.translate;
  }

  /**
   * Notify (translated if applicable) using humane.log.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}}               [options] for this particular notification.
   * @param {{}}               [defaults] for this type of notification.
   *
   * @return {Promise}
   *
   */
  @readonly()
  log(message, options = {}, defaults = this.__config.defaults) {
    if (this.translate(options, defaults)) {
      if (message instanceof Array) {
        message = message.map(item=>this.i18n.tr(item));
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
   * @param {String|{}}  [defaults] for this shortcut.
   *                     A string evaluates to {'addnCls': defaults}
   *
   * @return {function(message, options)}
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
   * Force remove humane log
   *
   * @return {Promise}
   *
   */
  @readonly()
  remove() {
    return new Promise(resolve => {
      return this.__humane.remove(resolve);
    });
  }
}
