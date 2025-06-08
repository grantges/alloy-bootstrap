# Alloy-Bootstrap

Bootstrap and reset stylesheet for use with Appcelerator Titanium Alloy Cross Platform Applications. A big thanks to Tony Lukasavage for starting down this process with his initial reset stylesheet for Alloy. I'll continue to pull from his standards and keep the bootstrap updated.

Also - a big thanks to the Twitter Boostrap project. Its just awsome and a big inspiration for what I'm trying to do here with Appcelerator Titanium and Alloy.

THIS IS A WORK IN PROGRESS AND SHOULD BE CONSIDERED EXPERIMENTAL - ESPECIALLY THE GRID SYSTEM :)

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


