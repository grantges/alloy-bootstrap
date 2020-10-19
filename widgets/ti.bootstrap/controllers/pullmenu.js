let _args = arguments[0] || {}

/** Stops */
const menuStopTop = Ti.Platform.DisplayCaps.platformHeight*.05;
const menuStopMiddle = Ti.Platform.DisplayCaps.platformHeight*.6;
const menuStopBottom = Ti.Platform.DisplayCaps.platformHeight - 105;
let menuPosition = { top: menuStopBottom, state:"bottom" };

/** Touch Monitoring */
let isContextDragging = false;

/** EventSubscribers */
let menuPositionSubscribers = [];

/**
 * addEventListener
 * Registers a callback function from any object that wants to react to the change
 * in this component
 * 
 * @param {String} event 
 * @param {Function} listener 
 */
$.addEventListener = (event, listener) => {
    menuPositionSubscribers.push(listener);
};

/**
 * addView
 * Adds any UIView component to the pull menu
 * @param {UIView} view 
 */
$.addView = (view) => {
    view.top = 10;
    $.context.add(view);
}

/**
 * Handles the scroll even for the Context view
 * @param {Object} e 
 */
const _onContextScroll = (e) => {
    
    if(e.y <= 0 && isDragging) {
        $.context.scrollingEnabled = false;
        menuPosition.state = "middle";
        _animateMenuPosition(menuStopMiddle);
    }
};

/**
 * Sets the isContextDragging flag when a user is physically scrolling
 * @param {Object} e 
 */
const _onContextDragStart = (e) => {
    isContextDragging = true;
};

/**
 * Sets the isContextDragging to false to show user is not actively dragging
 * the Context view
 * @param {Object} e 
 */
const _onContextDragEnd = (e) => {
    isContextDragging = false;
}

/**
 * Updates the menu position based on the direction of the swipe.
 * @param {Object} event 
 */
const _onSwipe = (event) => {
    
    if(event.direction === 'up') {

        switch(menuPosition.state){

            case "bottom":
                menuPosition.state="middle";
                _animateMenuPosition(menuStopMiddle);
                break;

            case "middle":
                menuPosition.state="top"    
                _animateMenuPosition(menuStopTop);
                $.context.scrollingEnabled = true;
                break;

            default:
        
        }
    }

    if(event.direction === 'down') {

        switch(menuPosition.state){

            case "top":
                menuPosition.state="middle";
                _animateMenuPosition(menuStopMiddle);
                $.context.scrollingEnabled = false;
                break;

            case "middle":
                menuPosition.state="bottom";
                _animateMenuPosition(menuStopBottom);
                break;

            default:
        }
    }
}

/**
 * Animates the position of the menu based on the top position
 * @param {Number} pos - The top position for which to set the menu.
 */
const _animateMenuPosition = (pos) => {
    
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
/** Initialize Widget Container */
$.widgetContainer.addEventListener('swipe', _onSwipe);
$.widgetContainer.applyProperties(menuPosition);

/** Register ScrollView for events */
$.context.addEventListener('scroll', _onContextScroll);
$.context.addEventListener('dragstart', _onContextDragStart);
$.context.addEventListener('dragend', _onContextDragEnd);