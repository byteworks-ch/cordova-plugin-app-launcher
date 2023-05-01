# Cordova App Launcher Plugin (for iOS and Android)

1. [Description](https://github.com/byteworks-ch/cordova-plugin-app-launcher#1-description)
2. [Installation](https://github.com/byteworks-ch/cordova-plugin-app-launcher#2-installation)
3. [Usage](https://github.com/byteworks-ch/cordova-plugin-app-launcher#3-usage)
	1. [iOS](https://github.com/byteworks-ch/cordova-plugin-app-launcher#ios)
	2. [Android](https://github.com/byteworks-ch/cordova-plugin-app-launcher#android)


## 1. Description

This plugin allows you to check if an app is installed on the user's device.

It requires an URI Scheme (e.g. comgooglemaps://) on iOS or a Package Name (e.g com.google.android.apps.maps) on Android.


### Supported Platforms

* iOS
* Android

## 2. Installation

The Cordova CLI is the recommended way to install, see [The Command-line Interface](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html). 

```
$ cordova plugin add https://github.com/byteworks-ch/cordova-plugin-app-launcher.git --save
```

Prepare and compile your project:
```
$ cordova prepare
$ cordova build
```


## 3. Usage

### 3.1 iOS

On iOS it is required to add the url schemes that you want to check to the whitelist.

Simply open your app's .plist (usually `platforms/ios/<appname>/<appname>-Info.plist)` with an editor and add the following code with your needed Schemes.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>comgooglemaps</string>
    <string>maps</string>
</array>
```

```javascript
appLauncher.checkUrl(
    'comgooglemaps://',
    function() {
        console.log('Google Maps is available');
    },
    function() {
        console.log('Google Maps is not available');
    }
);
```

### 3.2 Android

```javascript
appLauncher.checkUrl(
    'com.google.android.apps.maps',
    function(info) {
        // Info parameter is available only for android
        console.log('Google Maps is available. Version: ', info.version);
    },
    function() {
        console.log('Google Maps is not available');
    }
);
```
