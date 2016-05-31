function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function _openIndex() {
        $.index.open();
    }
    function _onTableViewClick(e) {
        var win;
        var controller = Alloy.createController("ui/" + e.row.navid);
        if ("Ti.UI.Window" !== controller.getView().apiName) {
            win = $.UI.create("Ti.UI.Window");
            win.add(controller.getView());
        } else win = controller.getView();
        $.index.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId10 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId10"
    });
    var __alloyId11 = [];
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        title: "form inputs",
        navid: "form",
        id: "__alloyId12"
    });
    __alloyId11.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        title: "alerts",
        navid: "alerts",
        id: "__alloyId13"
    });
    __alloyId11.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        title: "signature",
        navid: "signature",
        id: "__alloyId14"
    });
    __alloyId11.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        title: "browser",
        navid: "browser",
        id: "__alloyId15"
    });
    __alloyId11.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        title: "timeline",
        navid: "timeline",
        id: "__alloyId16"
    });
    __alloyId11.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        title: "locations",
        navid: "locationFinder",
        id: "__alloyId17"
    });
    __alloyId11.push($.__views.__alloyId17);
    $.__views.tableView = Ti.UI.createTableView({
        data: __alloyId11,
        id: "tableView"
    });
    $.__views.__alloyId10.add($.__views.tableView);
    _onTableViewClick ? $.addListener($.__views.tableView, "click", _onTableViewClick) : __defers["$.__views.tableView!click!_onTableViewClick"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId10,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var walkthroughWidget = Alloy.createWidget("co.grantges.bootstrap.walkthrough", {
        pages: [ {
            title: "Walkthrough Widget",
            description: "This is an example of the co.grantges.bootstrap.walkhthrough widget",
            image: "/images/intro-1.png"
        }, {
            title: "Titles",
            description: "You can customize the title, description and image!",
            image: "/images/intro-2.png"
        }, {
            title: "Helpful Tips",
            description: "This widget can help you provide instructions and tips to your users.",
            image: "/images/intro-3.png"
        } ],
        onClose: function() {
            _openIndex();
        }
    });
    walkthroughWidget.open();
    __defers["$.__views.tableView!click!_onTableViewClick"] && $.addListener($.__views.tableView, "click", _onTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;