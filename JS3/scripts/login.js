window.addEventListener('load',init);
var username,password,login,message;
var flag = true;

function init(){
    username = document.querySelector('#usrid');
    password = document.querySelector('#pwd');
    login = document.querySelector('#loginUser');
    message = document.querySelector('#message');
    login.addEventListener('click',loginUser);
}


function loginUser(){
    if(username.value == "vikrant" && password.value == "123@$"){
        var admin = firebase.database().ref('/admins/');

        admin.on('value',snapshot=>{
            var adminUser = snapshot.val();
            console.log(adminUser);
            for(let key in adminUser){
                console.log(key);
                let obj = adminUser[key];
                if(obj.username = username.value && obj.password == password.value){
                    localStorage.isAdminLogin = true;
                    location.href ="dashboard1.html";
                }
                
            }
           
            
        });
    }
    else{

        var customers = firebase.database().ref('/customers/');

    customers.on('value',snapshot=>{
        var allcustomers = snapshot.val();
        console.log(allcustomers);
        for(let key in allcustomers){
            let customerObj = allcustomers[key];
            console.log(customerObj);
            // console.log("obj username is ",customerObj.username);
            // console.log("obj password is ",customerObj.password);
            // console.log("username is ",username.value);
            // console.log("username is ",password.value);
            if((customerObj.username == username.value) && (customerObj.password == password.value)){
                localStorage.isCustomerLogin = true;
                location.href = 'dashboard.html'; 
                flag = false;
            }
        
        }
        if(flag)
        {
            message.className = 'alert-danger text-center rounded';
            message.innerHTML = '<h1>Invalid Username and Password</h1>';
        }

    });


    }
}