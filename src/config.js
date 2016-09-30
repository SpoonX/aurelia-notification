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
   * Defaults for all notifictaions
   * @param {Object}
   */
  defaults = {}

  /**
   * Notification names and their specific defaults
   * @param {Object}
   */
  notifications = {
    note   : {},
    success: {addnCls: 'success'},
    error  : {addnCls: 'error'},
    info   : {addnCls: 'info'}
  }

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
  configure(incomming = {}, base = this) {
    this.translate     = 'translate' in incomming ? incomming.translate : base.translate;
    this.defaults      = extend({}, base.defaults, incomming.defaults);
    this.notifications = extend({}, base.notifications, incomming.notifications);

    return this;
  }
}
