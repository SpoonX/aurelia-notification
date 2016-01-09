import {Config} from './config';
import Humane from 'wavded/humane-js';
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

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
    this.config         = config;
    this.humane         = humane.create();
    this.i18n           = i18n;
    this.humane.baseCls = this.config.current.baseCls;
    this.translate      = this.config.current.translate;

    this.success = this.spawn({addnCls: `${this.humane.baseCls}-success`});
    this.error   = this.spawn({addnCls: `${this.humane.baseCls}-error`  });
    this.info    = this.spawn({addnCls: `${this.humane.baseCls}-info`   });
  }

  /**
   * Notify (translated if applicable) using humane.log.
   *
   * @param {String|String[]}  message|multi-line message.
   * @param {{}}               [options] passed on to humane.
   *
   * @return {Promise}
   *
   */
  log(message, options, defaults) {
    if (this.translate && this.i18n.i18next.isInitialized()) {
      if (message instanceof Array) {
        message = message.map(item=>this.i18n.tr(item));
      } else {
        message = this.i18n.tr(message);
      }
    }

    return new Promise((resolve, reject)=>{
      this.humane.log(message, options, resolve, defaults);
    });
  }

  /**
   * Set a custom shortcut for .log with defaults
   *
   * @param {{}}              [defaults] passed on to humane.
   *
   * @return {Promise}
   *
   */
  spawn(defaults) {
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
  remove() {
    return new Promise((resolve, reject)=>{
      this.humane.remove(resolve);
    });
  }
}
