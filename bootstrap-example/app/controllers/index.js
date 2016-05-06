

/**
 * Lets create an example of the `alloy-bootstrap` walkthorugh widget. This widget
 * acts as an instructional guide for how to use your app.
 */
var walkthroughWidget = Alloy.createWidget('co.grantges.bootstrap.walkthrough', {
  // Pass in the data to create the pages.
  pages:[
    {title: 'Walkthrough Widget', description: 'This is an example of the co.grantges.bootstrap.walkhthrough widget', image: '/images/intro-1.png'},
    {title: 'Titles', description: 'You can customize the title, description and image!', image: '/images/intro-2.png'},
    {title: 'Helpful Tips', description: 'This widget can help you provide instructions and tips to your users.', image: '/images/intro-3.png'}
  ],
  onClose: function(){
    _openIndex();
  }
});
walkthroughWidget.open()

function _openIndex(){
  $.index.open();
}

function _onTableViewClick(e) {
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
