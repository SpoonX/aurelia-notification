'use strict';

System.register([], function (_export, _context) {
  var _typeof, Config;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('Config', Config = function () {
        function Config() {
          _classCallCheck(this, Config);

          this.translate = true;
          this.defaults = {};
          this.notifications = {
            note: {},
            success: { addnCls: 'success' },
            error: { addnCls: 'error' },
            info: { addnCls: 'info' }
          };
        }

        Config.prototype.configure = function configure() {
          var incomming = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          var base = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];

          this.translate = 'translate' in incomming ? incomming.translate : base.translate;

          this.defaults = Object.assign({}, base.defaults, incomming.defaults);

          if (_typeof(incomming.notifications) === 'object') {
            for (var key in incomming.notifications) {
              incomming.notifications[key] = _typeof(incomming.notifications[key]) === 'object' ? incomming.notifications[key] : { addnCls: incomming.notifications[key] };
              this.notifications[key] = Object.assign({}, base.notifications[key], incomming.notifications[key]);
            }
          }

          return this;
        };

        return Config;
      }());

      _export('Config', Config);
    }
  };
});