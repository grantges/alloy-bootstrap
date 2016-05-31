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
    function _add(pageData) {
        var page = Alloy.createWidget("co.grantges.bootstrap.walkthrough", "page", pageData);
        if (page && page.getView()) {
            $.scrollableView.addView(page.getView());
            _pages.push(page);
            _pages.forEach(function(item, index) {
                if (0 !== index) {
                    item.getView().opacity = PAGE_START_OPACITY;
                    item.getView().transform = PAGE_START_TRANSFORMATION;
                }
            });
        }
    }
    function _remove(pageIndex) {
        if (_pages[i]) {
            $.scrollableView.remove(_pages[i]);
            _pages.splice(pageIndex, 1);
        }
    }
    function _open(animate) {
        animate = animate || true;
        $.walkthroughView.open(animate ? $A.fadeIn : null);
    }
    function _close(animate) {
        animate = animate || true;
        $.walkthroughView.close(animate ? $A.fadeOut : null);
        _onClose && _onClose(null, {
            pageIndex: _currentPage
        });
    }
    new (require("alloy/widget"))("co.grantges.bootstrap.walkthrough");
    this.__widgetId = "co.grantges.bootstrap.walkthrough";
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
    var __defers = {};
    $.__views.walkthroughView = Ti.UI.createWindow({
        backgroundColor: "#fff",
        apiName: "Ti.UI.Window",
        id: "walkthroughView",
        classes: []
    });
    $.__views.walkthroughView && $.addTopLevelView($.__views.walkthroughView);
    var __alloyId8 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        cacheSize: 4,
        height: "70%",
        showPagingControl: true,
        pagingControlColor: "transparent",
        pageIndicatorColor: "#552D8DD6",
        currentPageIndicatorColor: "#2D8DD6",
        views: __alloyId8,
        apiName: "Ti.UI.ScrollableView",
        id: "scrollableView",
        classes: []
    });
    $.__views.walkthroughView.add($.__views.scrollableView);
    $.__views.closeBtn = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 18
        },
        bottom: 40,
        width: 100,
        height: 45,
        layout: "horizontal",
        borderRadius: 4,
        textAlign: "center",
        backgroundColor: "#ececec",
        color: "#969696",
        apiName: "Ti.UI.Label",
        id: "closeBtn",
        classes: [ "btn", "btn-default", "h4", "col-4", "bottom-buffer" ],
        text: L("btn-skip", "Skip")
    });
    $.__views.walkthroughView.add($.__views.closeBtn);
    _close ? $.addListener($.__views.closeBtn, "click", _close) : __defers["$.__views.closeBtn!click!_close"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var PAGE_START_TRANSFORMATION = Ti.UI.create2DMatrix().scale(.5), PAGE_START_OPACITY = .4;
    var $A = Alloy.createWidget("co.grantges.bootstrap", "animations"), _currentPage = 0, _pages = [];
    !function(options) {
        $.scrollableView.addEventListener("scrollend", function(e) {
            _currentPage = e.currentPage;
            if ($.scrollableView.currentPage >= $.scrollableView.views.length - 1) {
                $.removeClass($.closeBtn, "btn-default");
                $.addClass($.closeBtn, "btn-primary", {
                    text: "Close"
                });
            } else if ($.closeBtn.text != L("btn-skip", "Skip")) {
                $.removeClass($.closeBtn, "btn-primary");
                $.addClass($.closeBtn, "btn-default", {
                    text: L("btn-skip", "Skip")
                });
            }
        });
        $.scrollableView.addEventListener("scroll", function(e) {
            var scale = Math.abs(e.currentPageAsFloat - e.currentPage);
            if (.5 > scale && _pages[e.currentPage - 1]) {
                _pages[e.currentPage - 1].getView().opacity = scale.toFixed(1);
                _pages[e.currentPage - 1].getView().transform = Ti.UI.create2DMatrix().scale(scale);
            }
            _pages[e.currentPage].getView().opacity = 1 - scale.toFixed(2);
            _pages[e.currentPage].getView().transform = Ti.UI.create2DMatrix().scale(1 - scale);
        });
        if (options.pages && options.pages.length) {
            console.log(typeof options.pages.forEach);
            options.pages.forEach(function(item) {
                _add(item);
            });
        }
        _onClose = options.onClose;
    }($.args);
    exports.add = _add;
    exports.remove = _remove;
    exports.open = _open;
    exports.close = _close;
    __defers["$.__views.closeBtn!click!_close"] && $.addListener($.__views.closeBtn, "click", _close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;