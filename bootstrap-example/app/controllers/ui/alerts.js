var toast = null;

function openToast(e){
  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('ti.bootstrap', 'toast', {
    onClick: closeToast,
    title: 'Click to Close Me'
  });

  toast.open();
}

function openRedToast(){

  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('ti.bootstrap', 'toast', {
    onClick: closeToast,
    icon: 'icon-envelope-o',
    backgroundColor: '#E31B23',
    borderColor: '#B7000B',
    title: 'Click to Close Me'
  });

  toast.open();
}

function openTopToast(e){
  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('ti.bootstrap', 'toast', {
    onClick: closeToast,
    position: 'top',
    title: 'Click to Close Me'
  });

  toast.open();
}

function openTopRedToast(){

  toast && toast.close() && (toast=null);
  toast = Alloy.createWidget('ti.bootstrap', 'toast', {
    onClick: closeToast,
    position: 'top',
    icon: 'icon-envelope-o',
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
