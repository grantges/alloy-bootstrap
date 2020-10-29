/**
 *   _   _   _                 _       _                   
 *  | | (_) | |               | |     | |                  
 *  | |_ _  | |__   ___   ___ | |_ ___| |_ _ __ __ _ _ __  
 *  | __| | | '_ \ / _ \ / _ \| __/ __| __| '__/ _` | '_ \ 
 *  | |_| |_| |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |
 *   \__|_(_)_.__/ \___/ \___/ \__|___/\__|_|  \__,_| .__/ 
 *                                                  | |    
 *                                                  |_|                                             
 * @author         Bert Grantges
 * @date           October 21, 2020
 * @description    Widget to render a font based Icon using the `icomoon` font.
 *                 
 *                 Special thanks to https://icomoon.io app for providing the free usage of the open source fonts.
 */

const ICONS = require('bootstrap/icons.json');

/**
 * Widget Constructor - this will get called on initial creation, passing in any arguments prvided.
 * @type {Function}
 * @param {Object}  params - any properties passed into the creation of the Icon object
 */
(function _constructor(params){

    /**
     * If parameters are passed as part of the creation, lets make sure we add them to the Label
     */
    if(params) {
        /**
         * HACK - BG
         * Any passed in property / class that styles the font overwrites the `fontFamily` property, 
         * which removes the ability to render the icon properly. This makes sure that we add back
         * the proper font family for the icon. 
         */ 
        if(params.font){
            params.font.fontFamily = 'icomoon'
        }

        $.lblIcon.applyProperties(params);

        /**
         * If an `icon` property is passed in on creation, lets go ahead and add it to the Label
         */
        if(params.icon){
            const iconText = _fetchIconText(params.icon);
            if(iconText) {
                this._icon = params.icon;
                $.lblIcon.text = iconText;
            }
        }

        if(params.value){
            $._value = params.value;
        }
    }


})($.args);

/**
 * Fetches the unicode character for the icon from the `icomoon` font library
 * @param {String} icon - string reference for the unicode character
 */
function _fetchIconText (icon) {
    
    if(ICONS[icon]){
        return ICONS[icon];
    }
    else {
        let err = new Error(`Icon '${icon}' does not exist. Please provide a valid Icon`);
        throw(err);
    }

}

/**
 * Adds a getter/setter for the Icon property of the widget
 */
Object.defineProperty($,'icon', {
    get: function _getIcon() {
        return this._icon
    },
    set: function _setIcon(icon) {
        
        const iconText = _fetchIconText(icon);
        if(iconText) {
            this._icon = icon;
            $.lblIcon.text = iconText;
        }
    }
});

Object.defineProperty($, 'value', {
    get: function _getValue() {
        return $._value;
    },
    set: function _setValue(v) {
        $._value = v;
    }
});


