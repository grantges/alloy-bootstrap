# Alloy-Bootstrap

Bootstrap and reset stylesheet for use with Appcelerator Titanium Alloy Cross Platform Applications. A big thanks to Tony Lukasavage for starting down this process with his initial reset stylesheet for Alloy. I'll continue to pull from his standards and keep the bootstrap updated.

Also - a big thanks to the Twitter Boostrap project. Its just awsome and a big inspiration for what I'm trying to do here with Appcelerator Titanium and Alloy.


## Platform Standardizations & Inconsistencies

Across Appcelerator Titanium, there are certain inconsistencies that this bootstrap file tries to normalize OR workaround. This section documents the querks that are seen and references how they are addressed in the Alloy-Bootstrap app.tss file.

### All Platforms


#### Ti.UI.ImageView.preventDefaultImage
Nothing says amatuer hour like seeing this default images load up

### iPhone



### Android

#### Ti.UI.Label.color
By default, the `color` property on Android is set to white. Normalized to black with this Bootstrap stylesheet. 

### Blackberry

#### Ti.UI.View.backgroundImage
This property is missing in the Titanium SDK v3.1.2

#### Custom Fonts
Custom fonts are currently not supported in Titanium SDK v3.1.2


