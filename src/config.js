export class Config {
  configure(config = {}, defaults = this.defaults) {
    Object.assign(this.current, defaults, config);
    Object.assign(this.current.notifications, defaults.notifications, config.notifications);
    Object.assign(this.current.defaults, defaults.defaults, config.defaults);
    return this.current;
  }

  constructor() {
    this.defaults = {
      translate: true,
      defaults: {
        baseCls: 'humane'
      },
      notifications: {
        note: '',
        success: 'success',
        error: 'error',
        info: 'info'
      }
    };
    this.current = this.defaults;
  }
}
