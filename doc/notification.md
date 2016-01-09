Docs for {`Notification`}
=======

```javascript
import {Notification} from 'spoonx/aurelia-notification';
```

---------

.log(message[, options|callback[, callback]])
------

Notify using humane.log. The message gets translated using i18n if available.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object          | Additional options for humane.js               |

### Returns
Promise.resolve when finshed

### Examples
```javascript
this.notification.log('Color will change when finished')
.then(()=>document.body.style.backgroundColor='#a66000');
```

---------

.success(message[, options])
.error(message[, options)
.info(message[, options])
------

Shortcuts for .log with addnCls 'success', 'error' or 'info' automatically
added to the options.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object          | Additional options for humane.js               |

### Returns
Promise.resolve when finshed

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

Makes a shortcut .log with defaults.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| defaults   | object          | Defaults options for humane.js                 |

### Returns
A .log function with defaults applied.

### Examples
```javascript
let mylog = this.notification.spawn({addCls:'alert'});

mylog('This is a translated custom alert')
.then(()=>console.log('alert closed'));
```

---------

.remove([callback])
------

Force remove notification

### Returns
Promise.resolve when finshed

### Examples
```javascript
this.notification.remove();
```
