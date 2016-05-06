function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap.walkthrough/" + s : s.substring(0, index) + "/co.grantges.bootstrap.walkthrough/" + s.substring(index + 1);
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
    new (require("alloy/widget"))("co.grantges.bootstrap.walkthrough");
    this.__widgetId = "co.grantges.bootstrap.walkthrough";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "page";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.page = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "page"
    });
    $.__views.page && $.addTopLevelView($.__views.page);
    $.__views.image = Ti.UI.createImageView(function() {
        var o = {};
        Alloy.deepExtend(true, o, {
            preventDefaultImage: true
        });
        Alloy.isHandheld && Alloy.deepExtend(true, o, {
            height: 300,
            width: Ti.UI.Size
        });
        Alloy.deepExtend(true, o, {
            id: "image"
        });
        return o;
    }());
    $.__views.page.add($.__views.image);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 30
        },
        color: "#646E7E",
        text: "Page Title",
        id: "title"
    });
    $.__views.page.add($.__views.title);
    $.__views.description = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 14
        },
        width: "90%",
        top: 10,
        color: "#646E7E",
        text: "Veniam proident incididunt mollit velit consectetur elit laboris eiusmod est dolor.",
        id: "description"
    });
    $.__views.page.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    !function(options) {
        $.image.image = options.image;
        $.title.text = options.title;
        $.description.text = options.description;
    }($.args);
    Object.defineProperty($, "image", {
        get: function() {
            return $.image.image;
        },
        set: function(i) {
            $.image.image = i;
        }
    });
    Object.defineProperty($, "title", {
        get: function() {
            return $.title.text;
        },
        set: function(t) {
            $.title.text = t;
        }
    });
    Object.defineProperty($, "description", {
        get: function() {
            return $.description.text;
        },
        set: function(t) {
            $.description.text = t;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;