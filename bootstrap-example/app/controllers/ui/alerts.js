var toast = null;

function openToast(e){
  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('co.grantges.bootstrap', 'toast', {
    onClick: closeToast,
    title: 'Click to Close Me'
  });

  toast.open();
}

function openRedToast(){

  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('co.grantges.bootstrap', 'toast', {
    onClick: closeToast,
    icon: 'bell-o',
    backgroundColor: '#E31B23',
    borderColor: '#B7000B',
    title: 'Click to Close Me'
  });

  toast.open();
}

function closeToast(){
  toast.close();
  toast = null;
}
