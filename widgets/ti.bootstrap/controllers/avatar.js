const _args = arguments[0] || {};

let image = _args.image;
let style = _args.style ; // circle / smooth / square (default)
let status = _args.status;
let size = _args.size; //xs sm med lrg x-lrg xx-lrg

let borderColor = _args.borderColor || '#091324';

$.setImage = (img) => {
    if(img) {
        image = img;
        $.avatarImage.image = img;
    }
};

$.setStatus = (s) => {
    if(s) {
      status = s;
    }
    _updateAvatarStatus();
};

$.setSize = (s) => {
    size = s;
    _updateAvatarImage();
};

$.setStyle = (avatarStyle) => {
    if(avatarStyle) {
        style = avatarStyle;
        _updateAvatarImage();
    }
}

const _updateAvatarImage = () => {

    $.resetClass($.avatarImage, `avatar-${size} ${style}-${size} border-${size}`);
    $.avatarImage.borderColor = borderColor;
    $.avatarImage.image = image;

    _updateAvatarStatus();
};

const _updateAvatarStatus = () => {

    console.log(status);
    if(style == 'circle')
        $.resetClass($.avatarStatus, `status-offset status-${status} status-${size}`);
    else 
        $.resetClass($.avatarStatus, `bottom right status-${status} status-${size}`);
    $.avatarStatus.borderColor = borderColor;
};

$.init = () => {
    
    _updateAvatarImage();
    _updateAvatarStatus();

};

$.init();
