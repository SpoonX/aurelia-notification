import {Config} from './config';
import Humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';
import {readonly} from 'javascript-decorators';

@inject(Config, Humane, I18N)
export class Notification {

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

    // ensure humane.container is document.body after aurelia.start
    this.setContainer();

    // add configured default methods
    for (let key in config.current.notifications) {
      this[key] = this.spawn(config.current.notifications[key]);
    }
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
   * Set a new configuration based on current configuration
   *
   * @param {{}}  [config] the custom config object.
   *
   *
   */
  @readonly()
  configure(config) {
    this.__config.configure(config, this.__config.current);

    this.setContainer(this.__config.current.container);

    for (let key in this.__config.current.notifications) {
      this[key] = this.spawn(this.__config.current.notifications[key]);
    }

    return this.__config.current;
  }

  /**
   * Set the container for the notification
   *
   * @param {[DOM.node]}  [container] for the notification (default=doc.body)
   *
   *
   */
  @readonly()
  setContainer(container = document.body) {
    this.__humane.container = container;
    this.__humane.container.appendChild(this.__humane.el);
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
  translate(options, defaults) {
    let joined = Object.assign({}, this.__config.current, defaults, options);
    return this.__i18n.i18next.isInitialized() && joined.translate;
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
  log(message, options, defaults = this.__config.defaults) {
    if (this.translate()) {
      if (message instanceof Array) {
        message = message.map(item=>this.i18n.tr(item));
      } else {
        message = this.__i18n.tr(message);
      }
    }

    return new Promise((resolve, reject)=>{
      this.__humane.log(message, options, resolve, defaults);
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
    let defaults = Object.assign({}, this.__config.defaults, addnDefaults);

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
    return new Promise((resolve, reject)=>{
      this.__humane.remove(resolve);
    });
  }
}
