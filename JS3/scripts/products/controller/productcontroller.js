window.addEventListener('load',init);
var product_list;
var span;
var view_cart;
var logout;

// var count=0;
function init(){
    
        product_list = document.querySelector('#product_list');
        span = document.querySelector("#count");
        view_cart = document.querySelector('#view_cart');
        view_cart.addEventListener('click',savePid);
        logout = document.querySelector('#logout');
        logout.addEventListener('click',()=>{
            localStorage.isCustomerLogin = false;
        });
        span.innerText= 0;
        display();

}


function savePid(){
    
    localStorage.pids = JSON.stringify(productoperations.pids);
}

function display(){
    productoperations.products.forEach(ele =>{
        // console.log(ele);
        var div = document.createElement('div');
        var p1 = document.createElement('p');
        p1.innerText = "Product ID :"+ele.id;
        var p2 = document.createElement('p');
        p2.innerText = "Product Name :"+ele.name;
        var img = document.createElement('img');
        img.src = ele.image;
        var p3 = document.createElement('p');
        p3.innerText = "Product Price :"+ele.price;
        var p4 = document.createElement('p');
        p4.innerText = "Description :"+ele.description;
        var btn = document.createElement('button');
        btn.className="btn btn-primary";
        btn.innerText='Add To Cart';
        btn.addEventListener('click',()=>{
            updateCount(ele.id);
        });
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(img);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(btn);
        div.className = "border border-success  text-center";
        div.classList.add("rounded");
        div.classList.add("alert-info");
        div.style.padding = '10px';
        div.style.margin = '10px';
        
        product_list.appendChild(div);
    });
}

function updateCount(id){
    productoperations.cart.count++;
    productoperations.pids.push(id);
    console.log(productoperations.cart.count);
    span.innerText = productoperations.cart.count;
}