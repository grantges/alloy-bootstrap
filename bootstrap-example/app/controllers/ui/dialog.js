
(function constructor(args){

    console.log("Dialog Created");


})($.args);

function onSuccessDialogClick(e){
    console.log("On Click Success Dialog");

    let dialog = Alloy.createWidget('ti.bootstrap', 'dialog', {
        title: "Success!",
        subtitle: "You saved it - great job!",
        okCallback: function() {  
            dialog.close();
        } 
    }); 

    dialog.open();
}

function onCancelDialogClick(e) {
    console.log("On Click Cancel Dialog");``

    let dialog = Alloy.createWidget('ti.bootstrap', 'dialog', {
        title: "Update now?",
        subtitle: "Click OK to update or Cancel to exit.",
        okCallback: function() {
            dialog.close();
        },
        cancelCallback: function() {
            dialog.close();
        }
    });

    dialog.open();
}