window.addEventListener('load',init);

function init(){
    if(object.customers.length>0){

    }
    else{
        var table = document.querySelector('#tb1');
        table.innerHTML='';
        var span = document.createElement('span');
        span.innerText = 'NO Customers to display';
        table.appendChild(span);
    }
}