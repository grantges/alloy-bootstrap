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

const Reste = require('reste');
App.Api = new Reste();

App.Api.config({
    Q: require('q'),
    debug: true, // allows logging to console of ::REST:: messages
    errorsAsObjects: true, // Default: false. New in 1.4.5, will break 1.4.4 apps that handle errors
    autoValidateParams: false, // set to true to throw errors if <param> url properties are not passed
    validatesSecureCertificate: false, // Optional: If not specified, default behaviour from http://goo.gl/sJvxzS is kept.
    timeout: 4000,
    url: "https://randomuser.me/api/",
    requestHeaders: {
        "Content-Type": "application/json"
    },
    methods: [{
        name: "getUsers",
        get: "?results=6&inc=picture"
    }],
    onError: function(e, retry) {
        console.log('Error -> ' + e );
    },
    onLoad: function(e, callback) {
        callback(e);
    }
});
