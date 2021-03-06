/**
* ███╗   ███╗██╗   ██╗███████╗██╗  ██╗   ██╗
* ████╗ ████║╚██╗ ██╔╝██╔════╝██║  ╚██╗ ██╔╝
* ██╔████╔██║ ╚████╔╝ █████╗  ██║   ╚████╔╝ 
* ██║╚██╔╝██║  ╚██╔╝  ██╔══╝  ██║    ╚██╔╝  
* ██║ ╚═╝ ██║   ██║   ██║     ███████╗██║   
* ╚═╝     ╚═╝   ╚═╝   ╚═╝     ╚══════╝╚═╝   
                                          
* @author       Bert Grantges
* @date         February 14, 2021
* @description  A hidden menu component. Clicking the button animates sub items horizontally.    
* 
*/

/**
 * Dependecies
 */
import { createIcon } from 'bootstrap/ui';

/**
 * Component Constants
 */
const CONTAINER_WIDTH = 75;
const DEFAULT_WIDTH = 50;
const BUFFER = 10;

/**
 * Component Options
 */
let _buttonColor,
    _enabledColor,
    _disabledColor,
    _menuItems,
    _isOpen;

/**
 * Event Handlers
 */
let _onClickCallback = null;


/**
 * Constructor - This is called immediately on creation.
 * 
 * @param {Object} args - Initial arguments passed to the component
 */
(function constructor(args){

    /** Component property default values*/
    _buttonColor   = args.buttonColor || 'GRAY';
    _enabledColor  = args.enabledColor || 'BLUE';
    _disabledColor = args.disabledColor || 'GRAY'; 
    _menuItems = args.menuItems;

    _menuItems = [{
        icon: 'icon-compass2',
    },{
        icon: 'icon-location',
    },{
        icon: 'icon-share21',
    }]

    /** State */
    _isOpen = false;

    /** Callbacks */
    _onClickCallback = args.onClick || null;

    _renderMenuItems();

})($.args);

/**
 * Toggles the sub-menu open or closed
 */
function togglePopOutItems(){

    if(_isOpen) {
        $.toggleBtn.setIcon('icon-layers')
        _popIn();
    }
    else {
        $.toggleBtn.setIcon('icon-keyboard_arrow_left');
        _popOut();
    }

    _isOpen = !_isOpen;

}

/**
 * Handler for the sub menu click events. Index and status properties of the sub items are sent back to the the 
 * declared callback handlers.
 * 
 * @param {Object} e - View click event object.
 */
function onItemClick(e) {

    e.source.color = (e.source.status) ? _disabledColor : _enabledColor;
    e.source.status = !e.source.status;

    if(_onClickCallback){
        
        _onClickCallback({
            index: e.source.index,
            status: e.source.status
        });

    }

}

/**
 * Animation for expanding the sub menu
 */
function _popOut() {

    let w = $.subMenu.children.length * (DEFAULT_WIDTH+BUFFER);
    $.container.width = w+BUFFER;

    $.subMenu.animate({
        width: w,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        duration: 250
    });
}

/**
 * Animation for closing the sub menu
 */
function _popIn() {

    $.subMenu.animate({
        width: DEFAULT_WIDTH,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
        duration: 250
    }, () => {
        $.container.width = CONTAINER_WIDTH;
    });
    
}

function _renderMenuItems() {

    if(_menuItems && _menuItems.length) {

        _menuItems.forEach( (item, index) => {
        
            let btnStyle = $.createStyle({ 
                classes: ['btn-icon'],
                color: 'BLUE',
                left: (index+1) * (DEFAULT_WIDTH + BUFFER),//(index == 0) ? DEFAULT_WIDTH : BUFFER,
                icon: item.icon,
                index: index,
                status: item.status || true
            });

            let btn = createIcon(btnStyle)
            $.subMenu.add(btn);
        });

    }

}

/**
 * Public Component Property definitions
 */
Object.defineProperty($, 'onClick', {
    get: function _getOnClickCallback() {
        return _onClickCallback;
    },
    set: function _setOnClickCallback(func) {
        if(typeof(func) == 'function'){
            _onClickCallback = func;
        }
    }
});

Object.defineProperties($, {
    enabledColor: {
        get: function _getEnabledColor() {
            return _enabledColor;
        },
        set: function _setEnabledColor(c) {
            _enabledColor = c;
        }
    },
    disabledColor: {
        get: function _getDisabledColor() {
            return _disabledColor;
        },
        set: function _setDisabledColor(c) {
            _disabledColor = c;
        }
    },
    buttonColor: {
        get: function _getButtonColor() {
            return _buttonColor;
        },
        set: function _setButtonColor(c) {
            _buttonColor = c;
        }
    }
});