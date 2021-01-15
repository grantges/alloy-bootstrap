/**
 * Alloy for Titanium by Appcelerator
 * This is generated code, DO NOT MODIFY - changes will be lost!
 * Copyright (c) 2012 by Appcelerator, Inc.
 */
var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;

// The globals should be configured by the bootstrap script, however if anyone is using an SDK
// older than 7.5.0 that won't get ran. So set them here if they don't exist
if (!global.Alloy) {
  global.Alloy = Alloy;
  global._ = _;
  global.Backbone = Backbone;
}

// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//


/**
 * Initialize the app singleton. Yep, thats all you have to do. You can reference
 * the `App` variable from anywhere in your application now!
 */
App = Alloy.createWidget('ti.bootstrap').App;

/**
                                                                                             * The App object is easily extenisble if you need to, just pass in data objects like
                                                                                             * any widget!
                                                                                             *
                                                                                             * Example - Extending the User Object
                                                                                             *
                                                                                             * App = Alloy.createWidget('ti.bootstrap', {
                                                                                             *   User: {
                                                                                             *     type: 'admin'
                                                                                             *   }
                                                                                             * }).App;
                                                                                             */


// Open root window if a new UI session has started. Can happen more than once in app's lifetime.
// Event can only be fired if "tiapp.xml" property "run-in-background" is set true.
Ti.UI.addEventListener('sessionbegin', function () {
  Alloy.createController('index');
});

// Open the root window immediately if an active UI session exists on startup.
// Note: The Ti.UI.hasSession property was added as of Titanium 9.1.0.
if (typeof Ti.UI.hasSession === 'undefined' || Ti.UI.hasSession) {
  Alloy.createController('index');
}