import extend from 'extend';

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
