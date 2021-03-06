

(function constructor(args) {

    $.title.text = args.title;
    $.subtitle.text = args.subtitle;

    args.okCallback && $.btnOk.addEventListener('click', args.okCallback);
    args.cancelCallback && $.btnCancel.addEventListener('click', args.cancelCallback);

})($.args);

function _open(options) {

    options = options || {};
    $.dialog.open(options);

}
$.open = _open;

function _close(options) {
    $.dialog.close(options);
}
$.close = _close;