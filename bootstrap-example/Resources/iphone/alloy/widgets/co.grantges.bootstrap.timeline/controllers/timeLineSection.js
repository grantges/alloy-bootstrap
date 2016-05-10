function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap.timeline/" + s : s.substring(0, index) + "/co.grantges.bootstrap.timeline/" + s.substring(index + 1);
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
    new (require("alloy/widget"))("co.grantges.bootstrap.timeline");
    this.__widgetId = "co.grantges.bootstrap.timeline";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeLineSection";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "transparent",
        height: 65,
        width: Ti.UI.FILL,
        id: "wrapper"
    });
    $.__views.wrapper && $.addTopLevelView($.__views.wrapper);
    $.__views.gradient = Ti.UI.createView({
        backgroundColor: "#FFF",
        opacity: .5,
        height: 65,
        width: Ti.UI.FILL,
        id: "gradient"
    });
    $.__views.wrapper.add($.__views.gradient);
    $.__views.circle = Ti.UI.createView({
        backgroundColor: "#fff",
        height: 66,
        width: 66,
        left: 10,
        borderRadius: 33,
        borderWidth: 5,
        borderColor: "#a9a9a9",
        id: "circle"
    });
    $.__views.wrapper.add($.__views.circle);
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue"
        },
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: "#FFF",
        color: "#666",
        textAlign: "center",
        text: "2014",
        id: "label"
    });
    $.__views.circle.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    $.label.text = _args.text || "", $.label.backgroundColor = _args.fillColor || "#fff";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;