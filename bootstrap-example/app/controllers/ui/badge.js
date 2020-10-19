

const styles = [
    'btn-default',
    'btn-primary',
    'btn-success',
    'btn-warn',
    'btn-error'
];

_.each(styles, (style) => {

    const s =  $.createStyle({
        classes: style
    });
    let badge = Alloy.createWidget('ti.bootstrap', 'badge');
    badge.backgroundColor = s.backgroundColor;
    badge.color = s.color;
    badge.title = style;
    badge.top = 3;
    badge.right = 3;

    $.badgeContainer.add(badge.getView());

})