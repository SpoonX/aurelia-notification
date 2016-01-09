Docs for {`Notification`}
=======

```javascript
import {Notification} from 'spoonx/aurelia-notification';
```

---------


.humane
------

The humane instance. See [Humane.js](http://wavded.github.io/humane-js/).

### Examples
```javascript
this.notification.info = this.notification.humane.spawn({ addnCls: 'humane-libnotify-info', timeout: 1000 });
this.notification.info('Info Themed Notifier');
```

---------

.log(message[, options])
------

Notify using Humane.log. The message gets translated using i18n if available.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object/function | Additional options or callback for humane.log  |

### Examples
```javascript
this.notification.log('Callback when finished', function() {
  document.body.style.backgroundColor='#a66000'; 
})
```

---------

.success(message[, options])
------

Notify success calling humane.log with {addnCls: 'success'} automatically 
added to the options. The message gets translated using i18n if available.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object          | Additional options for humane.log              |

### Examples
```javascript
this.notification.success('Success');
```

---------

.error(message[, options])
------

Notify error calling humane.log with {addnCls: 'error'} automatically 
added to the options. The message gets translated using i18n if available.

### Parameters

| Parameter | Type            | Description                                    |
| --------- | --------------- | ---------------------------------------------- |
| message   | string/array    | The message as string or array of strings      |
| options   | object          | Additional options for humane.log              |

### Examples
```javascript
this.notification.error(['Error','Not available'], {waitForMove: true});
```
