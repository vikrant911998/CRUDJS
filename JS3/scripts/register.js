window.addEventListener('load',init);
var nm,mobile,username,password,register;

function init(){
    nm = document.querySelector('#nm');
    mobile = document.querySelector('#mobile');
    username = document.querySelector('#usrid');
    password = document.querySelector('#pwd');
    register = document.querySelector('#register');
    register.addEventListener('click',registerUser);
}

function registerUser(){
    if(username.value == "vikrant" && password.value == "123@$"){
        var obj = {
            username:username.value,
            password:password.value
        }
        var promise = firebase.database().ref('/admins/'+"admin").set(obj);
        promise.then(data=>{
            alert("Record saved in firebase");
        }).catch(err=>{
            alert("Error during customer add");
        });
    }
    else{
        var customer = {
            name:nm.value,
            mobile:mobile.value,
            username:username.value,
            password:password.value
        }
        
        var promise = firebase.database().ref('/customers/'+customer.name).set(customer);
        promise.then(data=>{
            alert("Record saved in firebase");
        }).catch(err=>{
            alert("Error during customer add");
        }); 
    }
    // alert(nm.value);
    // console.log(nm.value);
    // console.log(mobile.value);
    // console.log(username.value);
    // console.log(password.value);
}