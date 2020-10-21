
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
   
   /**
    * Placeholder User object so that you can access this globally.
    */
   User: {
      isAuthenticated: false,
      sessionId: null,
   },

   /**
	 * Device information, some come from the Ti API calls and can be referenced
	 * from here so multiple bridge calls aren't necessary, others generated here
	 * for ease of calculations and such.
	 *
	 * @type  {Object}
	 * @param {String} version The version of the OS
	 * @param {Number} versionMajor The major version of the OS
	 * @param {Number} versionMinor The minor version of the OS
	 * @param {Number} width The width of the device screen
	 * @param {Number} height The height of the device screen
	 * @param {Number} dpi The DPI of the device screen
	 * @param {String} orientation The device orientation, either "landscape" or "portrait"
	 * @param {String} statusBarOrientation A Ti.UI orientation value
	 */
	Device: {
		version: Ti.Platform.version,
		versionMajor: parseInt(Ti.Platform.version.split(".")[0], 10),
		versionMinor: parseInt(Ti.Platform.version.split(".")[1], 10),
		width: null,
		height: null,
		dpi: Ti.Platform.displayCaps.dpi,
		orientation: Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT ? "landscape" : "portrait"
	},

  Events: {

    onAppStart: function _onAppStart(options) {

        
    },

    onAppResume: function _onAppResume(_event) {

    },

    onAppPause: function _onAppPause(_event) {

    },

    onAppExit: function _onAppPause(_event) {

    },

    onOrientationChange: function _onOrientationChange(event) {

    },

    onNetworkChange: function _onNetworkChange(event) {

    }

  },

  Error: {

    log: function _app_log_error(err) {
      Ti.API.error(err);
    }

  },

  /**
   * This starts up the application and setups up all of the event handlers etc.
   * 
   * Recommendation is to run this ONE time from the `alloy.js` file
   */
  startApp: function (options) {

    // Global system Events
    Ti.Network.addEventListener("change", App.Events.onNetworkChange);
    Ti.App.addEventListener("pause", App.Events.onAppPause);
    Ti.App.addEventListener("close", App.Events.onAppExit);
    Ti.App.addEventListener("resumed", App.Events.onAppResume);
    Ti.Gesture.addEventListener("orientationchange", App.Events.onOrientationChange);

    if(OS_ANDROID) {
      Ti.Android.currentActivity.addEventListener("resume", App.Events.onAppResume);
    }

    // Require in the navigation module
    App.Navigator = require("navigation")({
      parent: App.globalWindow
    });

    // Get device dimensions
    App.Device.getDeviceDimensions();

    
  }
};
 _.extend($.App, $.args);
