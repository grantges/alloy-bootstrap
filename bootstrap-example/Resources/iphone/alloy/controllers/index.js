var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views["__alloyId15"] = Ti.UI.createWindow(
  { backgroundColor: "white", extendSafeArea: false, title: "Alloy Bootstrap Components", id: "__alloyId15" });

  var __alloyId16 = [];$.__views["__alloyId17"] = Ti.UI.createTableViewRow(
  { title: "Badges", navid: "badge", id: "__alloyId17" });

  __alloyId16.push($.__views["__alloyId17"]);$.__views["__alloyId18"] = Ti.UI.createTableViewRow(
  { title: "Card", navid: "card", id: "__alloyId18" });

  __alloyId16.push($.__views["__alloyId18"]);$.__views["__alloyId19"] = Ti.UI.createTableViewRow(
  { title: "User Profile", navid: "userProfile", id: "__alloyId19" });

  __alloyId16.push($.__views["__alloyId19"]);$.__views["__alloyId20"] = Ti.UI.createTableViewRow(
  { title: "Indicator / Display", navid: "indicator", id: "__alloyId20" });

  __alloyId16.push($.__views["__alloyId20"]);$.__views["__alloyId21"] = Ti.UI.createTableViewRow(
  { title: "Icons", navid: "icon", id: "__alloyId21" });

  __alloyId16.push($.__views["__alloyId21"]);$.__views["__alloyId22"] = Ti.UI.createTableViewRow(
  { title: "Form inputs", navid: "form", id: "__alloyId22" });

  __alloyId16.push($.__views["__alloyId22"]);$.__views["__alloyId23"] = Ti.UI.createTableViewRow(
  { title: "Avatar", navid: "avatar", id: "__alloyId23" });

  __alloyId16.push($.__views["__alloyId23"]);$.__views["__alloyId24"] = Ti.UI.createTableViewRow(
  { title: "Alerts", navid: "alerts", id: "__alloyId24" });

  __alloyId16.push($.__views["__alloyId24"]);$.__views["__alloyId25"] = Ti.UI.createTableViewRow(
  { title: "Menu Button", navid: "menuButton", id: "__alloyId25" });

  __alloyId16.push($.__views["__alloyId25"]);$.__views["__alloyId26"] = Ti.UI.createTableViewRow(
  { title: "Pull Up View", navid: "pullMenu", id: "__alloyId26" });

  __alloyId16.push($.__views["__alloyId26"]);$.__views["__alloyId27"] = Ti.UI.createTableViewRow(
  { title: "Custom Tab Bar", navid: "tabBar", id: "__alloyId27" });

  __alloyId16.push($.__views["__alloyId27"]);$.__views["__alloyId28"] = Ti.UI.createTableViewRow(
  { title: "Signature", navid: "signature", id: "__alloyId28" });

  __alloyId16.push($.__views["__alloyId28"]);$.__views["__alloyId29"] = Ti.UI.createTableViewRow(
  { title: "Browser", navid: "browser", id: "__alloyId29" });

  __alloyId16.push($.__views["__alloyId29"]);$.__views["__alloyId30"] = Ti.UI.createTableViewRow(
  { title: "Timeline", navid: "timeline", id: "__alloyId30" });

  __alloyId16.push($.__views["__alloyId30"]);$.__views["__alloyId31"] = Ti.UI.createTableViewRow(
  { title: "Locations", navid: "locationFinder", id: "__alloyId31" });

  __alloyId16.push($.__views["__alloyId31"]);$.__views["tableView"] = Ti.UI.createTableView(
  { data: __alloyId16, id: "tableView" });

  $.__views["__alloyId15"].add($.__views["tableView"]);
  _onTableViewClick ? $.addListener($.__views["tableView"], 'click', _onTableViewClick) : __defers['$.__views["tableView"]!click!_onTableViewClick'] = true;$.__views["index"] = Ti.UI.createNavigationWindow(
  { window: $.__views["__alloyId15"], id: "index" });

  $.__views["index"] && $.addTopLevelView($.__views["index"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file


  /**
   * Lets create an example of the `alloy-bootstrap` walkthorugh widget. This widget
   * acts as an instructional guide for how to use your app.
   */
  var walkthroughWidget = Alloy.createWidget('ti.bootstrap.walkthrough', {
    // Pass in the data to create the pages.
    pages: [
    { title: 'Walkthrough Widget', description: 'This is an example of the ti.bootstrap.walkhthrough widget', image: '/images/intro-1.png' },
    { title: 'Titles', description: 'You can customize the title, description and image!', image: '/images/intro-2.png' },
    { title: 'Helpful Tips', description: 'This widget can help you provide instructions and tips to your users.', image: '/images/intro-3.png' }],

    onClose: function () {
      _openIndex();
    } });

  walkthroughWidget.open();

  function _openIndex() {
    $.index.open();
  }

  function _onTableViewClick(e) {
    var win;
    var controller = Alloy.createController('ui/' + e.row.navid);
    if (controller.getView().apiName !== 'Ti.UI.Window') {
      win = $.UI.create('Ti.UI.Window');
      win.add(controller.getView());
    } else
    {
      win = controller.getView();
    }

    $.index.openWindow(win);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views["tableView"]!click!_onTableViewClick'] && $.addListener($.__views["tableView"], 'click', _onTableViewClick);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///Users/bert/Repos/titanium/alloy-bootstrap/bootstrap-example/build/map/Resources/iphone/alloy/controllers/index.js.map