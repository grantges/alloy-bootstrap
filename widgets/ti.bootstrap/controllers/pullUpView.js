
let menuPosition,  
    stickyPoints,
    isContextDragging,
    currentStickyPointIdx,
    menuPositionSubscribers;
    
(function _constructor(options) {

    options = options || {};
    
    /** Touch Monitoring */
    isContextDragging = false;

    /** Default Sticky Points Setup */
    stickyPoints = options.stickyPoints || [
        Ti.Platform.DisplayCaps.platformHeight*.05,
        Ti.Platform.DisplayCaps.platformHeight*.6,
        Ti.Platform.DisplayCaps.platformHeight - 200
    ];

    // Force Sticky Points to be sorted in Ascending order
    stickyPoints.sort(function(a, b){return a - b});

    currentStickyPointIdx = options.stickyPointDefault || 2;
    menuPosition = { top: stickyPoints[currentStickyPointIdx], index: currentStickyPointIdx};

    /** Initialize Widget Container */
    $.widgetContainer.addEventListener('swipe', _onSwipe);
    $.widgetContainer.applyProperties(menuPosition);

    /** EventSubscribers */
    menuPositionSubscribers = [];

    /** Register ScrollView for events */
    $.context.addEventListener('scroll', _onContextScroll);
    $.context.addEventListener('dragstart', _onContextDragStart);
    $.context.addEventListener('dragend', _onContextDragEnd);

    /**
     * Add any childrend to the pullUpView content container
     */

     if(options && options.children){
         options.children.forEach(function(childView){
             _addView(childView);
         })
     }
    
})($.args);


/**
 * addEventListener
 * Registers a callback function from any object that wants to react to the change
 * in this component
 * 
 * @param {String} event 
 * @param {Function} listener 
 */
function _addEventListener(event, listener) {
    menuPositionSubscribers.push(listener);
};
$.addEventListener = _addEventListener()

/**
 * addView
 * Adds any UIView component to the pull menu
 * @param {UIView} view 
 */
function _addView(view) {
    view.top = 10;
    $.context.add(view);
}
$.addView = _addView;

function _setStickyPoints(arr, index) {
    
    if(arr && (arr instanceof Array) ){
        stickyPoints = arr;
        stickyPoints.sort((a,b) => (a-b));

        if(index) {
            _animateMenuPosition(stickyPoints[index]);
        }
    }
}
$.setStickyPoints = _setStickyPoints;

/**
 * Handles the scroll even for the Context view
 * @param {Object} e 
 */
function _onContextScroll(e) {
    
    if(e.y <= 0 && isContextDragging) {
        $.context.scrollingEnabled = false;
        menuPosition.index = currentStickyPointIdx;
        _animateMenuPosition(stickyPoints[currentStickyPointIdx]);
    }
};

/**
 * Sets the isContextDragging flag when a user is physically scrolling
 * @param {Object} e 
 */
function _onContextDragStart(e) {
    isContextDragging = true;
};

/**
 * Sets the isContextDragging to false to show user is not actively dragging
 * the Context view
 * @param {Object} e 
 */
function _onContextDragEnd(e) {
    isContextDragging = false;
}

/**
 * Updates the menu position based on the direction of the swipe.
 * @param {Object} event 
 */
function _onSwipe(event) {
    
    if(event.direction === 'up' && (currentStickyPointIdx > 0) ) {
        currentStickyPointIdx--;     
    }

    else if(event.direction === 'down' && (currentStickyPointIdx < (stickyPoints.length-1)) ) {
        currentStickyPointIdx++;
    }

    menuPosition.index=currentStickyPointIdx;
    _animateMenuPosition(stickyPoints[currentStickyPointIdx]);      
}

/**
 * Animates the position of the menu based on the top position
 * @param {Number} pos - The top position for which to set the menu.
 */
function _animateMenuPosition(pos) {
    
    const newMenuTopPosition = Ti.UI.createAnimation({
        top: pos,
        curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT,
        duration: 250
    });
    
    $.widgetContainer.animate(newMenuTopPosition);

    // Notificy Event Subscribers
    _.each(menuPositionSubscribers, (listener) => {
        (typeof(listener) === 'function') && listener({position: wrapperPosition.state, top:pos});
    });

}
