
var panel = $.panel.getView();

(function _constructor(options){

  var view = $.UI.create('Ti.UI.View', {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  });

  console.log(typeof($.panel.add));
  panel.add(view);

})($.args);
