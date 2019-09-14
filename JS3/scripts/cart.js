window.addEventListener('load',init);
var cart_list;
var total;
var count;
var logout;

function init(){
    cart_list = document.querySelector('#cart_list');
    total = document.querySelector('#total');
    logout = document.querySelector('#logout');
    logout.addEventListener('click',()=>{
        localStorage.isCustomerLogin = false;
    });
    fillcart();
    display();
}



function fillcart(){
    var obj;
    productoperations.pids = JSON.parse(localStorage.pids);
    productoperations.pids.forEach(element=>{
        
        obj = productoperations.products.find(ele=>ele.id == element);
        productoperations.cart.list.push(obj);
        console.log("The cart after is ",productoperations.cart);
    });
    // console.log("The pids is ",productoperations.pids);
    // console.log("The cart is ",productoperations.cart);
    // console.log("The products are",productoperations.products);
}

function display(){
    productoperations.cart.list.forEach(element=>{
        var p1 = document.createElement('p');
        p1.innerText = element.id;
        var p2 = document.createElement('p');
        p2.innerText = element.name;
        var img = document.createElement('img');
        img.src = element.image;
        var p3 = document.createElement('p');
        p3.innerText = element.price;
        var p4 = document.createElement('p');
        p4.innerText = element.description;
        var div = document.createElement('div');
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(p3);
        div.appendChild(p4);
        // div.appendChild(btn);
        div.className = "border border-success  text-center";
        div.classList.add("rounded");
        div.classList.add("alert-info");
        div.style.padding = '10px';
        div.style.margin = '10px';
        cart_list.appendChild(div);
    });
        count =0;
        productoperations.cart.list.forEach(ele=>{
            count +=ele.price;
        });
        total.innerText = 'Total Amount :'+count;
}