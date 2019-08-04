
function dologin(){
    var username = document.querySelector("#username").value;
    var pwd = document.querySelector("#pwd").value;

    if(username == pwd){
        location.href="dashboard.html";
    }
    else{
        document.querySelector("#error").innerText = "Invalid Username and Password";
    }
}