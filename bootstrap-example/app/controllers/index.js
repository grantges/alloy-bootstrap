function onTableViewClick(e) {

  var win;
  var controller = (e.row.type === 'widget') ? Alloy.createWidget(e.row.navid) : Alloy.createController(e.row.navid);
  if(controller.getView().apiName !== 'Ti.UI.Window'){
    win = $.UI.create('Ti.UI.Window');
    win.add(controller.getView());
  }
  else {
    win = controller.getView();
  }

  $.index.openWindow(win);

}

$.index.open();
