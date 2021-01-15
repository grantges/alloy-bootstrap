
/**
 * Initial transform state of new pages
 * @constant {Object}
 * @private
 */
var PAGE_START_TRANSFORMATION = Ti.UI.createMatrix2D().scale(0.5),
    PAGE_START_OPACITY = 0.4;

/**
 * Utility Library for standard Animations
 * @property {Object}
 * @private
 */
var $A = require('bootstrap/animations'),

/**
 * Current Page placeholder
 * Required due to BUG:
 * @property {Integer}
 * @private
 */
_currentPage = 0,

/**
 * Array to hold added pages of the walkthrough. This is used to animate the views
 * on scroll.
 * @property {Array}
 * @private
 */
_pages = [],

/**
 * Callback function when the user completes the walkthrough.
 * @property {Function}
 * @private
 */
_onCancel;

/**
 * Initialization function of the Walkthrough Widget
 * @constructor
 */
(function _constructor(options){

  $.scrollableView.addEventListener('scrollend', function(e){
     _currentPage = e.currentPage;

     if($.scrollableView.currentPage >= $.scrollableView.views.length-1){
       //set the skip button to a close style
       $.removeClass($.closeBtn, 'btn-default');
       $.addClass($.closeBtn, 'btn-primary', {text: 'Close'});
     }
     else if($.closeBtn.text != L('btn-skip', 'Skip')){
       //set the skip button to a close style
       $.removeClass($.closeBtn, 'btn-primary');
       $.addClass($.closeBtn, 'btn-default', {text: L('btn-skip', 'Skip')});
     }
   });

  $.scrollableView.addEventListener('scroll', function(e){
    var scale = Math.abs((e.currentPageAsFloat - e.currentPage));
    if(scale < 0.5) {
      if(_pages[e.currentPage-1]){
        _pages[e.currentPage-1].getView().opacity = scale.toFixed(1);
        _pages[e.currentPage-1].getView().transform = Ti.UI.createMatrix2D().scale(scale);
      }
    }
    _pages[e.currentPage].getView().opacity = 1-scale.toFixed(2);
    _pages[e.currentPage].getView().transform = Ti.UI.createMatrix2D().scale(1-scale);
  });

  /**
   * Insert Walkthrough Pages into ScrollableView
   */
  if(options.pages && options.pages.length){

     console.log(typeof(options.pages.forEach));
     options.pages.forEach(function(item){

       _add(item);
     });
   }

   /**
    * Setup the callbacks
    */
    _onClose = options.onClose;

})($.args);

function _add(pageData){
  var page = Alloy.createWidget('ti.bootstrap.walkthrough', 'page', pageData);
  if(page && page.getView()){
    $.scrollableView.addView(page.getView());
    _pages.push(page);

    //setup pages for animation
    _pages.forEach(function(item, index){
      if(index !== 0){
        item.getView().opacity = PAGE_START_OPACITY;
        item.getView().transform = PAGE_START_TRANSFORMATION;
      }
    })
  }
}
exports.add = _add;

function _remove(pageIndex){
  if(_pages[i]){
    $.scrollableView.remove(_pages[i]);
    _pages.splice(pageIndex, 1);
  }
}
exports.remove = _remove

function _open(animate){
  animate = animate || true;
  $.walkthroughView.open(animate ? $A.fadeIn : null);
};
exports.open = _open;

function _close(animate){
  animate = animate || true;
  $.walkthroughView.close(animate ? $A.fadeOut : null);

  _onClose && _onClose(null, {pageIndex: _currentPage});
};
exports.close = _close;

function _next(){
  $.scrollableView.moveNext();
}
exports.next = _next;
