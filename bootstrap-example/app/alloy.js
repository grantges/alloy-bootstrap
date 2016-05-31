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
App = Alloy.createWidget('co.grantges.bootstrap').App;

/**
 * The App object is easily extenisble if you need to, just pass in data objects like
 * any widget!
 *
 * Example - Extending the User Object
 *
 * App = Alloy.createWidget('co.grantges.bootstrap', {
 *   User: {
 *     type: 'admin'
 *   }
 * }).App;
 */
