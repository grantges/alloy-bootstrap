
/**
 * The `App` Object
 * This is the core of any alloy-boostrap application. It handles app initialization,
 * any app lifecycle events, navigation, notifications etc.
 *
 * This object is a singleton, meaning there can (and should) be only one instance of
 * `App` in your application.
 *
 * This is derived from the Core concepts put together by Rick Blalock here:
 * https://github.com/rblalock/core
 *
 * @singleton
 */

$.App = {

   User: {
      isAuthenticated: false,
      sessionId: null,
   },

   Device: {
     screenHeight: Ti.Platform.displayCaps.platformHeight,
     screenWidth: Ti.Platform.displayCaps.platformWidth,
     dpi: Ti.Platform.displayCaps.dpi
   },

   Events: {

     start: function _app_start(options){

     },

     resume: function _app_resume(options){

     },

     pause: function _app_pause(options){

     },

   },

   Errors: {

     log: function _app_log_error(err) {

     },

     unhandledException: function _app_on_unhandled_exception(err){

     }
   }
 };

 _.extend($.App, $.args);
