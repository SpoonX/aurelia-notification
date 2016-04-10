import extend from 'extend';

export class Config {
  // translate on/off
  translate = true
  // defaults for all notifictaions
  defaults = {}
  // notification names and their specific defaults
  notifications = {
    note: {},
    success: {addnCls: 'success'},
    error: {addnCls: 'error'},
    info: {addnCls: 'info'}
  }

  configure(incomming = {}, base = this) {
    this.translate     = 'translate' in incomming ? incomming.translate : base.translate;
    this.defaults      = extend({}, base.defaults, incomming.defaults);
    this.notifications = extend({}, base.notifications, incomming.notifications);

    return this;
  }
}
