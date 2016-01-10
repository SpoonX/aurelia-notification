Docs for {`Notification`}
=======

```javascript
import {Notification} from 'spoonx/aurelia-notification';
```

---------

.configure([config])
------

Set a new configuration based on current configuration. The same options as in the plugin configuration are available. The default configuration for this plugin is
```javascript
{
  translate: true,      // translate messages
  defaults: {		        // defaults for all notificatons
    baseCls: 'humane'   // base css class: 'humane'
  },       
  notifications: {      // default methods definitions
    note: '',		        // method name and the additional css class
    success: 'success', 
    error: 'error',
    info: 'info'
  }
}
```
The notifications object accepts `methodName:'addnClsName'` or `methodName:optionsObject`. For the available defaults/options see [humane-js](http://wavded.github.io/humane-js/).

### Parameters

| Parameter  | Type         | Description                                      |
| ---------- | ------------ | ------------------------------------------------ |
| config     | object       | New config based on the current config           |

### Returns
Configuration object

### Examples
```javascript
this.notification.configure(
  notifications: {
    success: 'smallSuccess',
    largeError: {addnCls:'largeError'}
  }
);
this.notification.largeError('Biggy');
```

---------

.setContainer([container = document.body])
------

Set the container for the notifications.

### Parameters

| Parameter  | Type         | Description                                      |
| ---------- | ------------ | ------------------------------------------------ |
| message    | [DOM.node]   | The container for the notifications.             |


### Examples
```javascript
this.setContainer($('.content'));
```

---------

.log(message[, options[, defaults]])
------

Notify using humane.log. Depending on options and defaults, the message gets translated using i18n if available.

### Parameters

| Parameter  | Type         | Description                                      |
| ---------- | ------------ | ------------------------------------------------ |
| message    | string/array | The message as string or array of strings        |
| options    | object       | Options for this particular notification         |
| defaults   | object       | Defaults for this type of notifications          |

### Returns
Promise.resolve when finished

### Examples
```javascript
this.notification.log('Color will change when finished')
.then(()=>document.body.style.backgroundColor='#a66000');
```

---------

.note(message[, options])
------
.success(message[, options])
------
.error(message[, options)
------
.info(message[, options])
------

As per the default configuration, method shortcuts for .log with addnCls defaulting to '', success', 'error' or 'info' resp. to the addnCls set in the plugin configuration.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object          | Additional options for humane.js               |

### Returns
Promise.resolve when finished

### Examples
```javascript
this.notification.success('Yippy!!');
this.notification.error(['Darn','Not available']);
this.notification.info('Still there?', {waitForMove: true})
then(()=>this.notification.info('Oh, you are!'));
```

---------

.spawn([defaults])
------

Sets a shortcut for .log with defaults.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| defaults  | object          | Defaults options for humane.js                 |

### Returns
A .log function with defaults applied.

### Examples
```javascript
let mylog = this.notification.spawn({addCls:'alert'});

mylog('This is a translated custom alert')
.then(()=>console.log('alert closed'));
```

---------

.remove()
------

Force remove the current notification

### Returns
Promise.resolve when finished

### Examples
```javascript
this.notification.remove();
```
