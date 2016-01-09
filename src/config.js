export class Config {
  configure(incomingConfig) {
    Object.assign(this.current, incomingConfig);
  }

  constructor() {
    this.current = {
      translate: true,
      baseCls: 'humane'
    };
  }
}
