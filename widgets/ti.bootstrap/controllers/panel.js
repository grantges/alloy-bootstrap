
(function _constructor(options){

  console.log($.panel.apiName);

  _.extend($.panel, options);
})($.args);

/**
 * Android specific properties
 */
if(OS_ANDROID){

Object.defineProperty($, 'elevation', {
  get: function _getElevation(){
    return $.panel.elevation;
  },
  set: function _setElevation(e){
    $.panel.elevation = e;
  }
});

}
