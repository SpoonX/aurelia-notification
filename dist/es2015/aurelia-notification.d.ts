declare module 'aurelia-notification' {
  export class Config {
    
    // translate on/off
    translate: any;
    
    // defaults for all notifictaions
    defaults: any;
    
    // notification names and their specific defaults
    notifications: any;
    configure(incomming?: any, base?: any): any;
  }
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
    note(message?: any, options?: any, defaults?: any): any;
    
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
    success(message?: any, options?: any, defaults?: any): any;
    
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
    error(message?: any, options?: any, defaults?: any): any;
    
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
    info(message?: any, options?: any, defaults?: any): any;
    
    /**
       * Construct.
       *
       * @param {Config} config
       * @param {Humane} humane
       * @param {i18N}   I18N
       *
       * @constructor
       */
    constructor(config?: any, humane?: any, i18n?: any);
    
    /**
       * Define a non-enumerable property on the Notification.
       *
       * @param {string}  property
       * @param {*}       value
       * @param {boolean} [writable]
       *
       * @return {Notification}
       */
    define(property?: any, value?: any, writable?: any): any;
    
    /**
       * Set the container for the notifications
       *
       * @param {[DOM.node]}  [container] for the notifications
       *
       * @return {DOM.node}  [container]
       *
       */
    setContainer(container?: any): any;
    
    /**
       * Set the base css class for the notifications
       *
       * @param {[string]}  [base class] for the notifications (default=__config.defaults.baseCls)
       *
       * @return {string}  [base class]
       *
       */
    setBaseCls(baseCls?: any): any;
    
    /**
       * Check if translate is on with given options
       *
       * @param {[{}]}  [options] for a particular notification.
       * @param {[{}]}  [defaults] for a type of notifications.
       *
       * @return {Boolean}
       *
       */
    translate(options?: any, defaults?: any): any;
    
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
    log(message?: any, options?: any, defaults?: any): any;
    
    /**
       * Set a custom shortcut for .log with defaults based on global defaults
       *
       * @param {String|{}}  [defaults] for this shortcut.
       *                     A string evaluates to {'addnCls': defaults}
       *
       * @return {function(message, options)}
       *
       */
    spawn(addnDefaults?: any): any;
    
    /**
       * Force remove humane log
       *
       * @return {Promise}
       *
       */
    remove(): any;
  }
}