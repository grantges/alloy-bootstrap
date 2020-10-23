

const style = ['circle', 'square', 'smooth'];
const status = ['none', 'online', 'away', 'offline', 'dnd'];
const size = ['xs', 'sm', 'med', 'lrg', 'x-lrg', 'xx-lrg'];


console.log('Get Users');
App.Api.getUsers().then(function(users){
    let count = 0;
    _.each(users.results, function(user){
       
        const avatar = Alloy.createWidget('ti.bootstrap', 'avatar', {
            image: user.picture.large,
            style: style[Math.floor(Math.random()*3)],
            status: status[Math.floor(Math.random()*5)],
            size: size[count],
            borderColor: '#fff'
        });

        $.addClass(avatar.getView(), 'top-buffer');
        $.win.add(avatar.getView());

        count++;
    })

});

