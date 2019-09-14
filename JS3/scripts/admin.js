window.addEventListener('load',init);
var logout;
function init(){
    logout = document.querySelector('#logout');
    logout.addEventListener('click',()=>{
        localStorage.isAdminLogin = false;
    });

}