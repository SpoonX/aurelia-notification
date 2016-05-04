# aurelia-notification

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform and contains a simple but fully configurable notification service using [humane-js](https://www.npmjs.com/package/humane-js). While all options of humane-js are available (instead of adding callbacks, promises are returned where applicable though), basic usage doesn't require more than adding your own css or selecting one of humane-js css files as specified below.

**Note:** [aurelia i18n](https://github.com/aurelia/i18n) needs to be installed and configured. All notifications will get automatically translated. You can turn off translations, either generally in the optional plugin configuration, or for individual notifications.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Used By

This library is used directly by applications only.

## Platform Support

This library can be used in the **browser** only.

## Important note

We've simplified installation and usage! This plugin should now be installed using `jspm i aurelia-notification` or (for webpack) `npm i aurelia-notification`. With this change `aurelia-notification` will use an npm installation of [humane-js](https://www.npmjs.com/package/humane-js). Make sure you update all references to `spoonx/aurelia-notification` and, if applicable to `wavded/humane-js`, remove the `spoonx/` resp. `wavded/` prefixes (don't forget your config.js, package.json, imports and bundles).

## Installation

Installing this module is fairly simple.

Run `jspm i aurelia-notification` from your project root.

Either set your own styles or install `humane-js` with `jspm i npm:humane-js` to have some default styles to choose from.

## Usage

### Configuring the plugin

This module comes with an optional configure method to change the some defaults. You can call it upon registering the plugin.

Make sure your project uses a `main.js` file to initialize aurelia. In your configure function, add the following:

```javascript
aurelia.use
  /* Your other plugins and init code */
  .plugin('aurelia-notification', config => {
    config.configure({
      translate: false,  // 'true' needs aurelia-i18n to be configured
      notifications: {
        'success': 'humane-libnotify-success',
        'error': 'humane-libnotify-error',
        'info': 'humane-libnotify-info'
      }
    });
  });
```

### Notification

Import the module, and get cracking.

```javascript
import {inject} from 'aurelia-framework';
import {Notification} from 'aurelia-notification';
/* optional:
 * import a css file to use one of the humane-js styles for the notifications.
 * For the four default notification types to display correctly also set the
 * corresponding classes in the plugin configuration (see example above).
 */
// import "humane-js/themes/libnotify.css!";

@inject(Notification)
export class SomeViewModel {

  constructor (notification) {
    notification.note('Plain');
    notification.success('Record created successfully');
    notification.error('Record creation failed');
    notification.info('New message');
  }
}
```

## API

You can find the full api documentation in [/doc/notification.md](./doc/notification.md).
