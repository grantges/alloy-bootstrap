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
    this.__controllerPath = "timeLineRow";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.timeLineRow = Ti.UI.createTableViewRow({
        selectionStyle: "Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE",
        height: 50,
        layout: "horizontal",
        id: "timeLineRow"
    });
    $.__views.timeLineRow && $.addTopLevelView($.__views.timeLineRow);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: 65,
        left: 10,
        id: "__alloyId3"
    });
    $.__views.timeLineRow.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "#a9a9a9",
        width: 5,
        height: Ti.UI.FILL,
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#a9a9a9",
        width: 20,
        height: 20,
        borderRadius: 10,
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.label = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 10,
            fontWeight: "bold"
        },
        left: 0,
        width: 75,
        height: 30,
        borderRadius: 5,
        textAlign: "center",
        color: "#fff",
        text: "Type",
        id: "label"
    });
    $.__views.timeLineRow.add($.__views.label);
    $.__views.message = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 12
        },
        text: "This is some text that goes here",
        id: "message",
        left: 10,
        height: Ti.UI.SIZE,
        color: "#666"
    });
    $.__views.timeLineRow.add($.__views.message);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    _args.label = _args.label || "COMMENT";
    var LABEL = {
        COMMENT: {
            text: "COMMENT",
            color: "#9AD97B"
        },
        FILE: {
            text: "FILE",
            color: "#8CD8DD"
        },
        TASK: {
            text: "TASK",
            color: "#F19A92"
        },
        REPLY: {
            text: "REPLY",
            color: "#AFA4DF"
        }
    };
    if (_args.label) {
        $.label.backgroundColor = LABEL[_args.label].color || "#9AD97B";
        $.label.text = LABEL[_args.label].text || "COMMENT";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;