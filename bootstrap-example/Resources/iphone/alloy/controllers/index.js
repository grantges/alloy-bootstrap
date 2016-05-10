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
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId8"
    });
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        title: "bootstrap ui",
        navid: "ui",
        id: "__alloyId10"
    });
    __alloyId9.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        title: "bootstrap browser",
        navid: "co.grantges.bootstrap.browser",
        type: "widget",
        id: "__alloyId11"
    });
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        title: "bootstrap timeline",
        navid: "co.grantges.bootstrap.timeline",
        type: "widget",
        id: "__alloyId12"
    });
    __alloyId9.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        title: "bootstrap locations",
        navid: "co.grantges.bootstrap.locationFinder",
        type: "widget",
        id: "__alloyId13"
    });
    __alloyId9.push($.__views.__alloyId13);
    $.__views.tableView = Ti.UI.createTableView({
        data: __alloyId9,
        id: "tableView"
    });
    $.__views.__alloyId8.add($.__views.tableView);
    _onTableViewClick ? $.addListener($.__views.tableView, "click", _onTableViewClick) : __defers["$.__views.tableView!click!_onTableViewClick"] = true;
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId8,
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