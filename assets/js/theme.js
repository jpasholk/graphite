document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
function theme() {
     if ( sessionStorage.getItem('bg') === '#bac0ce') {
        sessionStorage.setItem('bg', '#2f2c30');
        sessionStorage.setItem('cc', '#bac0ce');
     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', '#2f2c30');
        sessionStorage.setItem('cc', '#bac0ce');
    }
    else if( sessionStorage.getItem('bg') === '#2f2c30') {
        sessionStorage.setItem('bg', '#bac0ce');
        sessionStorage.setItem('cc', '#2f2c30');
    }
document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
}
