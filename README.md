# aurelia-notification

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform and contains a simple notification service using [Humane.js](http://wavded.github.io/humane-js/).

**Note:** If installed and configured, all notifications get translated using [aurelia i18n](https://github.com/aurelia/i18n). At a later stage, this will be more configurable.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Used By

This library is used directly by applications only.

## Platform Support

This library can be used in the **browser** only.

## Installation
Installing this module is fairly simple.

Run `jspm install github:spoonx/aurelia-notification` from your project root.

Either set your own styles or install Humane.js to use the default styles.

Run `jspm install github:waved/humane` from your project root.

## Usage
Import the module, and get cracking.

```javascript
import {Notification} from 'spoonx/aurelia-notification';
// optional: use a supplied style for the notifications
// import "wavded/humane-js/themes/libnotify.css!";
import {inject} from 'aurelia-framework';

@inject(Notification)
export class SomeViewModel {

  constructor (notification) {
    notification.success('Record created successfully');
    notification.error('Record created successfully');
  }
}
```

## API

You can find more documentation, including the available methods, in the `doc/` directory.
