

(function _constructor(options){

  var view = $.UI.create('Ti.UI.View', {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  });

  $.panel.add(view);

})($.args);
