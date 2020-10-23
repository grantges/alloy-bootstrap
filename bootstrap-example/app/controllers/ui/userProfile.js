

(function(options){   
    $.myCard.avatar = 'https://randomuser.me/api/portraits/men/23.jpg';
    $.myCard.title = 'Bert Grantges';
    $.myCard.subTitle = 'Austin, Tx'
    $.myCard.backgroundImage = '/images/paraglider-profile-bkg.png';
    
    const v = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 100,
        backgroundColor: "#f00"
    });

    $.myCard.addView(v); 

})($.args);
