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
    this.__controllerPath = "widget";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tableView = Ti.UI.createTableView({
        separatorStyle: 0,
        separatorColor: "transparent",
        id: "tableView",
        backgroundColor: "white"
    });
    $.__views.tableView && $.addTopLevelView($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("alloy/moment");
    arguments[0] || {};
    var footerView = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {
        fillColor: "#a9a9a9"
    }).getView();
    $.tableView.footerView = footerView;
    var sections = [];
    var todayHv = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {
        text: "Today",
        fillColor: "#dcdcdc"
    }).getView();
    var todaySection = Ti.UI.createTableViewSection({
        headerView: todayHv
    });
    todaySection.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow").getView());
    todaySection.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow").getView());
    sections.push(todaySection);
    for (var i = 0; 5 >= i; i++) {
        var hv = Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineSection", {
            text: "Day+" + i
        }).getView();
        var section = Ti.UI.createTableViewSection({
            headerView: hv
        });
        section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {
            label: "FILE"
        }).getView());
        section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {
            label: "TASK"
        }).getView());
        section.add(Alloy.createWidget("co.grantges.bootstrap.timeline", "timeLineRow", {
            label: "REPLY"
        }).getView());
        sections.push(section);
    }
    $.tableView.data = sections;
    $.init = function() {};
    $.addItem = function() {};
    $.removeItem = function() {};
    $.createFromJSON = function() {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;