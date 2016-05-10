function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap/" + s : s.substring(0, index) + "/co.grantges.bootstrap/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("co.grantges.bootstrap");
    this.__widgetId = "co.grantges.bootstrap";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "animations";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ANIMATION_DURATION = 250;
    var Animations = {
        fadeIn: Ti.UI.createAnimation({
            opacity: 1,
            duration: ANIMATION_DURATION,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
        }),
        fadeOut: Ti.UI.createAnimation({
            opacity: 0,
            duration: ANIMATION_DURATION,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
        })
    };
    module.exports = Animations;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;