function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "co.grantges.bootstrap.browser/" + s : s.substring(0, index) + "/co.grantges.bootstrap.browser/" + s.substring(index + 1);
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
    new (require("alloy/widget"))("co.grantges.bootstrap.browser");
    this.__widgetId = "co.grantges.bootstrap.browser";
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
    $.__views.wrapper = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "wrapper"
    });
    $.__views.wrapper && $.addTopLevelView($.__views.wrapper);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId1"
    });
    $.__views.title = Ti.UI.createTextField({
        font: {
            fontFamily: "Arial",
            fontSize: 10
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        paddingLeft: 10,
        paddingRight: 10,
        bottom: 5,
        backgroundColor: "#11000000",
        width: "80%",
        height: 20,
        borderRadius: 5,
        enabled: false,
        color: "#999",
        textAlign: "center",
        id: "title"
    });
    $.__views.__alloyId1.add($.__views.title);
    $.__views.wrapper.titleControl = $.__views.__alloyId1;
    $.__views.webView = Ti.UI.createWebView({
        willHandleTouches: false,
        height: "93%",
        id: "webView",
        url: "http://www.appcelerator.com"
    });
    $.__views.wrapper.add($.__views.webView);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "#9b9d9f",
        width: Ti.UI.FILL,
        height: 1,
        id: "__alloyId2"
    });
    $.__views.wrapper.add($.__views.__alloyId2);
    $.__views.browserNavigation = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: 50,
        id: "browserNavigation"
    });
    $.__views.wrapper.add($.__views.browserNavigation);
    $.__views.backBtn = Ti.UI.createLabel({
        color: "#CCC",
        font: {
            fontFamily: "icomoon",
            fontSize: 24
        },
        left: 10,
        top: 10,
        width: "25%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        text: "",
        id: "backBtn"
    });
    $.__views.browserNavigation.add($.__views.backBtn);
    $.__views.forwardBtn = Ti.UI.createLabel({
        color: "#CCC",
        font: {
            fontFamily: "icomoon",
            fontSize: 24
        },
        left: 10,
        top: 10,
        width: "25%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        text: "",
        id: "forwardBtn"
    });
    $.__views.browserNavigation.add($.__views.forwardBtn);
    $.__views.shareBtn = Ti.UI.createLabel({
        color: "#CCC",
        font: {
            fontFamily: "icomoon",
            fontSize: 24
        },
        left: 10,
        top: 10,
        width: "25%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        text: "",
        id: "shareBtn"
    });
    $.__views.browserNavigation.add($.__views.shareBtn);
    $.__views.bookmark = Ti.UI.createLabel({
        color: "#CCC",
        font: {
            fontFamily: "icomoon",
            fontSize: 24
        },
        left: 10,
        top: 10,
        width: "25%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        text: "",
        id: "bookmark"
    });
    $.__views.browserNavigation.add($.__views.bookmark);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var COLOR_DISABLED = "#CCC";
    var COLOR_ENABLED = "#5094FD";
    var onCloseCallback, onLoadCallback, onErrorCallback, onBeforeLoadCallback;
    !function(options) {
        $.shareBtn.setColor(COLOR_ENABLED);
        options.onClose || null;
        options.onload || null;
        options.onerror || null;
        options.onbeforeload || null;
    }($.args);
    exports.goBack = $.webView.goBack;
    exports.goForward = $.webView.goForward;
    exports.canGoBack = $.webView.canGoBack;
    exports.canGoForward = $.webView.canGoForward;
    exports.setHtml = function(_html) {
        $.webView.html = _html;
    };
    exports.getHTML = function() {
        return $.webView.html;
    };
    exports.setURL = function(_url) {
        $.webView.url = _url;
    };
    exports.getURL = function() {
        return $.webView.url;
    };
    exports.onClose = function(f) {
        onCloseCallback = f;
    };
    exports.onError = function(f) {
        onErrorCallback = f;
    };
    exports.onLoad = function(f) {
        onLoad = f;
    };
    exports.onBeforeLoadCallback = function(f) {
        onBeforeLoadCallback = f;
    };
    $.backBtn.addEventListener("click", function() {
        $.webView.goBack();
    });
    $.forwardBtn.addEventListener("click", function() {
        $.webView.goForward();
    });
    $.webView.addEventListener("load", function(e) {
        Ti.API.debug("ON LOAD");
        $.webView.canGoBack() && $.backBtn.setColor(COLOR_ENABLED) || $.backBtn.setColor(COLOR_DISABLED);
        $.webView.canGoForward() && $.forwardBtn.setColor(COLOR_ENABLED) || $.forwardBtn.setColor(COLOR_DISABLED);
        $.title.value = $.webView.evalJS("document.title");
        onLoadCallback && "function" == typeof onLoadCallback && onLoadCallback(e);
    });
    $.webView.addEventListener("error", function(e) {
        Ti.API.debug("ON ERROR");
        onErrorCallback && "function" == typeof onErrorCallback && onErrorCallback(e);
    });
    $.webView.addEventListener("beforeload", function(e) {
        Ti.API.debug("ON BEFORELOAD");
        $.title.value = e.url;
        onBeforeLoadCallback && "function" == typeof onBeforeLoadCallback && onBeforeLoadCallback(e);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;