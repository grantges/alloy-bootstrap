# Alloy-Bootstrap v2.0

> This branch should be considered work in progress.

The `alloy-bootstrap` project is a combination theme and widget library for use with Appcelerator Titanium and the Alloy Development Framework.

The goal of `alloy-boostrap` is to provide a faster easier approach to building cross platform mobile interfaces through a highly structured, global Titanium StyleSheet (TSS). Furthermore, a catalog of base components and more complex UI widgets that inherits and builds upon the TSS and core library allowing for a consistent look and feel throughout your mobile app.

## Goals
* Massively increase speed at which app UI can be development
* Reset the Titanium UI defaults to behave in a standardized manner
* Create a nice looking cross platform theme
* Provide high end prebuilt UI/UX widgets and workflows

## Getting Started

* Download or Clone this repository.
* Copy the `themes` folder and `widgets` folder to your projects `/app` folder
* Update your app config dependencies to take advantage of the new theme and widgets

~~~
{
    "global": {
        "theme": "bootstrap"
    },
    "env:development": {},
    "env:test": {},
    "env:production": {},
    "os:android": {},
    "os:blackberry": {},
    "os:ios": {},
    "os:mobileweb": {},
    "os:windows": {},
    "dependencies": {
        "ti.bootstrap": "0.0.1",
        "ti.bootstrap.browser": "0.0.1",
        "ti.bootstrap.timeline": "0.0.1",
        "ti.bootstrap.menus": "0.0.1",
        "ti.bootstrap.walkthrough": "0.0.1"
    }
}
~~~


* In your project's `alloy.js` file, add the following code:

~~~
App = Alloy.createWidget('ti.bootstrap').App;
~~~

The above code will implement the global App singleton object used for managing your application.

> Note eventually you'll be able to just npm this into your project, just not there yet.

------


## Platform Standardizations & Inconsistencies

Across Appcelerator Titanium, there are certain inconsistencies that this bootstrap file tries to normalize OR workaround. This section documents the querks that are seen and references how they are addressed in the Alloy-Bootstrap app.tss file.

### All Platforms

#### Ti.UI.ImageView.preventDefaultImage
Nothing says amatuer hour like seeing this default images load up

### Ti.UI.Window
Standardized the background color to `white` for all windows

### Ti.UI.TextField
Borders will be rounded with a standard `1px` border

### Android

#### Ti.UI.Label.color
By default, the `color` property on Android is set to white. Normalized to black with this Bootstrap stylesheet.


### Icon Font Support
With this latest update i have added support for using [FontAwesome](http://fontawesome.io) icons within your project. In order to best standardize on this with the font naming convention, I am using a service called [Icomoon.io](http://icomoon.io) to package the FontAwesome icon set for distribution. Simply go to their font builder and select the FontAwesome package, making sure to remove any others that may be included and this should work for you.

>A HUGE `thank you` to all the engineers at Appcelerator, the open source community and especially [Tony Lukasavage](https://github.com/tonylukasavage) for the amazing work put into Alloy. This has been a huge boost for Titanium and collaborative mobile development.
