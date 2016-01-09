# aurelia-notification

*Note: 0.1.0 - Breaking change - the default success and error css classes have changed to humane-success and humane-error*

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform and contains a simple notification service using [humane.js](http://wavded.github.io/humane-js/).

**Note:** If [aurelia i18n](https://github.com/aurelia/i18n) is installed and configured, all notifications get automatically translated. You can turn off translations in the optional plugin configuration.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Used By

This library is used directly by applications only.

## Platform Support

This library can be used in the **browser** only.

## Installation
Installing this module is fairly simple.

Run `jspm install github:spoonx/aurelia-notification` from your project root.

Either set your own styles or install humane.js with `jspm install github:waved/humane-js` to install some default styles to choose from.

## Usage

### Configuring the plugin

This module comes with an optional method to configure the plugin. You can call it upon registering the plugin.

Make sure your project uses a `main.js` file to initialize aurelia. In your configure function, add the following:

```javascript
aurelia.use
  /* Your other plugins and init code */
  .plugin('spoonx/aurelia-notification', config => {
    config.configure({
    	translate: true, 			      // translate with i18n. default: true
    	baseCls: 'humane-libnotify' // base class for humane-js. default: 'humane'
    });
  });
```

### Notification
Import the module, and get cracking.

```javascript
import {inject} from 'aurelia-framework';
import {Notification} from 'spoonx/aurelia-notification';
/* optional: use one of the humane-js styles for the notifications. For the
 * notifications to display correctly also set the corresponding base class in
 * the plugin configuration eg {baseCls: 'humane-libnotify'}.
 */
// import "wavded/humane-js/themes/libnotify.css!";

@inject(Notification)
export class SomeViewModel {

  constructor (notification) {
    notification.success('Record created successfully');
    notification.error('Record creation failed');
  }
}
```

## API

You can find more documentation, including the available methods, in the `doc/` directory.
