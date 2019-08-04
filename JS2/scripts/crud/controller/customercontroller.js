window.addEventListener('load',init);


function init(){
    document.querySelector("#add").addEventListener('click',add);
    document.querySelector('#save').addEventListener('click',save);
    document.querySelector('#load').addEventListener('click',load);
}

function printCustomers(customers){
    document.querySelector("#customers").innerHTML='';
    customers.forEach(printCustomer);
}

function load(){
    if(localStorage){
        if(localStorage.customers){
            customeroperations.customers = JSON.parse(localStorage.customers);
            printCustomers(customeroperations.customers);
        }
        else{
            alert("No data exist in LocalStorage");
        }
    }
    else{
        alert("your browser is outdated");
    }
}

function save(){
    if(localStorage){
        localStorage.customers = JSON.stringify(customeroperations.customers);
        console.log(localStorage.customers);
        alert('Record Saved');
        
    }
    else{
        alert('Your Browser is Outdated');
    }
}

function add(){
    var customerObj = new Customer();

    for(let i in customerObj){
        customerObj[i] = document.getElementById(i).value;
    }

    console.log("The Customer Object is ",customerObj);
    customeroperations.add(customerObj);
    printCustomer(customerObj);
}

function printCustomer(customerObj){
    var tbody = document.querySelector('#customers');
    var tr = tbody.insertRow();
    var index = 0;

    for(let i in customerObj){
        tr.insertCell(index).innerText = customerObj[i];
        index++;
    }
}