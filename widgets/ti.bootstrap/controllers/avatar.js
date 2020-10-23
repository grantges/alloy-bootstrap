/**
 *   _   _   _                 _       _                   
 *  | | (_) | |               | |     | |                  
 *  | |_ _  | |__   ___   ___ | |_ ___| |_ _ __ __ _ _ __  
 *  | __| | | '_ \ / _ \ / _ \| __/ __| __| '__/ _` | '_ \ 
 *  | |_| |_| |_) | (_) | (_) | |_\__ \ |_| | | (_| | |_) |
 *   \__|_(_)_.__/ \___/ \___/ \__|___/\__|_|  \__,_| .__/ 
 *                                                  | |    
 *                                                  |_|    
 * 
 * @author          Bert Grantges
 * @date            October 22, 2020
 * @description     A widget to display a user's avatar image and status. 
 * 
 */

(function _constructor(options){

    this.image = options.image;
    this.style = options.style ; // circle / smooth / square (default)
    this.status = options.status;
    this.size = options.size; //xs sm med lrg x-lrg xx-lrg
    this.borderColor = options.borderColor || '#091324';

    $.avatarImage.image = this.image;
    _updateAvatarStyle();
    _updateAvatarStatus();

})($.args);

function _updateAvatarStyle() {
   
    $.resetClass($.avatarImage, `avatar-${this.size} ${this.style}-${this.size} border-${this.size}`);
    
    console.log("set border color to " + this.borderColor);
    $.avatarImage.borderColor = this.borderColor;
    _updateAvatarStatus();

};

function _updateAvatarStatus() {

    if(style == 'circle')
        $.resetClass($.avatarStatus, `status-offset status-${this.status} status-${this.size}`);
    else 
        $.resetClass($.avatarStatus, `bottom right status-${this.status} status-${this.size}`);
    $.avatarStatus.borderColor = this.borderColor;

};

Object.defineProperty($, 'viewStyle', {
    get: function _getStyle(){
        return this.style;
    },
    set: function _setStyle(s){
        this.style = s;
        _updateAvatarStyle();
    }
})

Object.defineProperty($, 'viewSize', {
    get: function _getSize(){
        return this.size;
    },
    set: function _setSize(s){
        this.size = s;
        _updateAvatarStyle();
    }
})

Object.defineProperty($, 'viewBorderColor', {
    get: function _getBorderColor() {
        return  this.borderColor;
    },
    set: function _setBorderColor(c) {
        this.borderColor = c;
        this.avatarImage.borderColor = this.borderColor;
        this.avatarStatus.borderColor = this.borderColor;
    }
});

Object.defineProperty($, 'viewImage', {
    get: function _getImage() {
        return this.image;
    },
    set: function _setImage(i) {
        this.image = i;
        $.avatarImage.image = this.image;
    }
});

Object.defineProperty($, 'status', {
    get: function _getStatus() {
        return this.status;
    },
    set: function _setStatus(s) {
        this.status = s;
        _updateAvatarStatus();
    }
});
