

window.addEventListener('load',init);

function init(){
    document.querySelector('#add').addEventListener('click',myfunction);
}

function myfunction(){
    var id = document.querySelector('#csid').value;
    var name = document.querySelector('#csname').value;
    var username = document.querySelector('#csusername').value;
    var password = document.querySelector('#cspassword').value;
    var obj={
        id:id,
        name:name,
        username:username,
        password:password
    }
    console.log(obj);
    object.customers.push(obj);
    console.log(object.customers);
}
