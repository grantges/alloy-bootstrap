const icons = require('bootstrap/icons.json');


(function _constructor(options){

    this._titleAlign = options.titleAlign || 'right';
    $.titleAlign = this._titleAlign;
    $.indicatorUOM.bottom = 6;

})($.args);

$.setAllTextColor = function(color) {
    $.iconColor = $.titleColor = $.valueColor = $.measurementColor = color;
};

$.setIconAndTitleColor = function(color) {
    $.iconColor = $.titleColor = color;
}


$.hideType = function() {
    $.indicatorUOM.visible = false;
    $.indicatorUOM.width = 0;
}

$.showType = function() {
    $.indicatorUOM.visible = true;
    $.indicatorUOM.width = Ti.UI.SIZE;
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
        $.indicatorTitle.color = c;
    }
});

Object.defineProperty($, 'titleAlign', {
    get: function _getTitleAlign() {
        return this._titleAlign
    },
    set: function _setTitleAlign(align) {
        switch(align){
            case 'center':
                $.titleContainer.right = null;
                $.titleContainer.left = null;
                break;

            case 'left': 
                $.titleContainer.right = null;
                $.titleContainer.left = 0;
                break;

            case 'right': 
                $.titleContainer.right = 0;
                $.titleContainer.left = null;
                break;
            default:
        }
    }
})


/**
 * Value properties
 */
Object.defineProperty($, 'value', {
    get: function _getValue() {
        $.indicatorValue.text
    },
    set: function _setValue(text) {
        $.indicatorValue.text = text;
    }
});

Object.defineProperty($, 'valueColor', {
    get: function _getValueColor() {
        $.indicatorValue.color
    },
    set: function _setValueColor(c) {
        $.indicatorValue.color = c;
    }
});

Object.defineProperty($, 'valueSize', {
    get: function _getValueSize() {
        console.log($.indicatorValue.font.fontSize);
        return $.indicatorValue.font.fontSize;
    },
    set: function _setValueSize(s) {
        let size = $.createStyle({
            font:{
                fontSize: s
            }
        });
        
        $.indicatorValue.applyProperties(size);
    }
})

/**
 * Measurement Properties
 */
Object.defineProperty($, 'uom', {
    get: function _getUOM() {
        $.indicatorUOM.text
    },
    set: function _setUOM(text) {
        $.indicatorUOM.text = text;
    }
});

Object.defineProperty($, 'uomColor', {
    get: function _getUOMColor() {
        $.indicatorUOM.color
    },
    set: function _setUOMColor(c) {
        $.indicatorUOM.color = c;
    }
});

Object.defineProperty($, 'uomSize', {
    get: function _getUOMSize() {
        $.indicatorUOM.color
    },
    set: function _setUOMSize(s) {
        let size = $.createStyle({
            font:{
                fontSize: s
            }
        });
        $.indicatorUOM.applyProperties(size);
    }
});