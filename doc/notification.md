# Docs for {`Notification`}

```javascript
import {Notification} from 'aurelia-notification';
```

----------

## .configure([config])

Set a new configuration based on current configuration. The same options as in the plugin configuration are available. The default configuration for this plugin is

```javascript
{
  translate: true,      // translate messages
  defaults: {},         // defaults for all notificatons are humane-js defaults
  notifications: {      // default methods definitions
    note: {},           // method name and their defaults
    success: {addnCls: 'success'},
    error: {addnCls: 'error'},
    info: {addnCls: 'info'}
  }
}
```

The notifications object accepts `methodName:'addnClsName'` or `methodName:optionsObject`. defaults.baseCls sets the base css class for humane-js notifications. The default of humane-js is {baseCls: 'humane'}. For the available defaults/options see [humane-js](http://wavded.github.io/humane-js/).

### Parameters

| Parameter | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| config    | object | New config based on the current config |

### Returns

The configuration object

### Examples

```javascript
this.notification.configure(
  notifications: {
    success: 'smallSuccess',   // converts to {addnCls: 'smallSuccess'}
    largeError: {addnCls:'largeError'}
  }
);
this.notification.largeError('Biggy');
```

----------

## .setBaseClass([baseCls = default.baseCls])

Set the base css class for the notifications.

### Parameters

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| message   | string | The base css class for the notifications. |

### Returns

The new baseCls

### Examples

```javascript
this.setBaseClass('humane-libnotify');
```

----------

## .setContainer([container = document.body])

Set the container for the notifications.

### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| message   | DOM.node | The container for the notifications. |

### Returns

The new container

### Examples

```javascript
this.setContainer($('.content'));
```

----------

## .log(message\[, options[, defaults]])

Notify using humane.log. Depending on options and defaults, the message gets translated using i18n if available.

### Parameters

| Parameter | Type         | Description                               |
| --------- | ------------ | ----------------------------------------- |
| message   | string/array | The message as string or array of strings |
| options   | object       | Options for this particular notification  |
| defaults  | object       | Defaults for this type of notifications   |

### Returns

Promise.resolve when finished

### Examples

```javascript
this.notification.log('Color will change when finished')
.then(()=>document.body.style.backgroundColor='#a66000');
```

----------

## .note(message[, options])

## .success(message[, options])

## .error(message\[, options)

## .info(message[, options])

As per the default configuration, method shortcuts for .log with addnCls defaulting to '', success', 'error' or 'info' resp. to the addnCls set in the plugin configuration.

### Parameters

| Parameter | Type         | Description                               |
| --------- | ------------ | ----------------------------------------- |
| message   | string/array | The message as string or array of strings |
| options   | object       | Additional options for humane-js          |

### Returns

Promise.resolve when finished

### Examples

```javascript
this.notification.success('Yippy!!');
this.notification.error(['Darn','Not available']);
this.notification.info('Still there?', {waitForMove: true})
then(()=>this.notification.info('Oh, you are!'));
```

----------

## .spawn([defaults])

Sets a shortcut for .log with defaults.

### Parameters

| Parameter | Type   | Description                                    |
| --------- | ------ | ---------------------------------------------- |
| defaults  | object | Default options for the returned .log function |

### Returns

A .log(message\[, options[, defaults]]) function with defaults applied.

### Examples

```javascript
let mylog = this.notification.spawn({addCls:'alert'});

mylog('This is a translated custom alert')
.then(()=>console.log('alert closed'));
```

----------

## .remove()

Force remove the current notification

### Returns

Promise.resolve when finished

### Examples

```javascript
this.notification.remove();
```
