const icons = require('bootstrap/icons.json');


(function _constructor(options){
    console.log("Inidcator Constructor");
    $.indicatorType.bottom = 6;

})($.args);

$.setAllTextColor = function(color) {
    $.iconColor = $.titleColor = $.valueColor = $.measurementColor = color;
};

$.setIconAndTitleColor = function(color) {
    $.iconColor = $.titleColor = color;
}

/**
 * Icon Properties
 */
Object.defineProperty($, 'icon', {
    get: function _getIcon() {
        $.indicatorIcon.text
    },
    set: function _setIcon(i) {
        $.indicatorIcon.text = icons[i]
    }
});

Object.defineProperty($, 'iconColor', {
    get: function _getIcon() {
        $.indicatorIcon.color
    },
    set: function _setIcon(c) {
        console.log(c);
        $.indicatorIcon.color = c;
    }
});


/**
 * Title Properties
 */
Object.defineProperty($, 'title', {
    get: function _getIcon() {
        $.indicatorTitle.text
    },
    set: function _setIcon(title) {
        $.indicatorTitle.text = title;
    }
});

Object.defineProperty($, 'titleColor', {
    get: function _getIcon() {
        $.indicatorTitle.color
    },
    set: function _setIcon(c) {
        console.log(c)
        $.indicatorTitle.color = c;
    }
});


/**
 * Value properties
 */
Object.defineProperty($, 'value', {
    get: function _getIcon() {
        $.indicatorValue.text
    },
    set: function _setIcon(text) {
        $.indicatorValue.text = text;
    }
});

Object.defineProperty($, 'valueColor', {
    get: function _getIcon() {
        $.indicatorValue.color
    },
    set: function _setIcon(c) {
        $.indicatorValue.color = c;
    }
});

/**
 * Measurement Properties
 */
Object.defineProperty($, 'measurement', {
    get: function _getIcon() {
        $.indicatorType.text
    },
    set: function _setIcon(text) {
        $.indicatorType.text = text;
    }
});

Object.defineProperty($, 'measurementColor', {
    get: function _getIcon() {
        $.indicatorType.color
    },
    set: function _setIcon(c) {
        $.indicatorType.color = c;
    }
});