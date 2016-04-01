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
    this.translate = 'translate' in incomming ? incomming.translate : base.translate;

    this.defaults = Object.assign({}, base.defaults, incomming.defaults);

    if (typeof incomming.notifications === 'object') {
      for (let key in incomming.notifications) {
        incomming.notifications[key] = (typeof incomming.notifications[key] === 'object') ? incomming.notifications[key] : {addnCls: incomming.notifications[key]};
        this.notifications[key] = Object.assign({}, base.notifications[key], incomming.notifications[key]);
      }
    }

    return this;
  }
}
