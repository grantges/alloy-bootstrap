function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function _startApp() {
        $.index.open();
    }
    function onTableViewClick(e) {
        var win;
        var controller = "widget" === e.row.type ? Alloy.createWidget(e.row.navid) : Alloy.createController(e.row.navid);
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
    $.__views.__alloyId7 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId7"
    });
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        title: "bootstrap ui",
        navid: "ui",
        id: "__alloyId9"
    });
    __alloyId8.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        title: "bootstrap browser",
        navid: "co.grantges.bootstrap.browser",
        type: "widget",
        id: "__alloyId10"
    });
    __alloyId8.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        title: "bootstrap timeline",
        navid: "co.grantges.bootstrap.timeline",
        type: "widget",
        id: "__alloyId11"
    });
    __alloyId8.push($.__views.__alloyId11);
    $.__views.tableView = Ti.UI.createTableView({
        data: __alloyId8,
        id: "tableView"
    });
    $.__views.__alloyId7.add($.__views.tableView);
    onTableViewClick ? $.addListener($.__views.tableView, "click", onTableViewClick) : __defers["$.__views.tableView!click!onTableViewClick"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId7,
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
            _startApp();
        }
    });
    walkthroughWidget.open();
    __defers["$.__views.tableView!click!onTableViewClick"] && $.addListener($.__views.tableView, "click", onTableViewClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;