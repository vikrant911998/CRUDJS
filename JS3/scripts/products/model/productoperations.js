const productoperations={
    products:[
        {
            id:101,
            name:'Mobile',
            image:'https://www.starhub.com/content/dam/catalog/starhub-store-huawei-mate-20-pro-black-front.png',
            price:4000,
            description:'This is a dummy product.'
        },
        {
            id:102,
            name:'Tshirt',
            image:'https://cdn.shopify.com/s/files/1/2656/8156/products/R1JiD9uZRfqXMiWwGFpO_CK_Grigio_Fronte_1240x.png?v=1539168543',
            price:4000,
            description:'This is a dummy product.'
        },
        {
            id:103,
            name:'Powerbank',
            image:'https://thegoodguys.sirv.com/products/50051037/50051037_531578.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&format=png&png.optimize=true',
            price:4000,
            description:'This is a dummy product.'
        },
        {
            id:104,
            name:'Television',
            image:'http://www.pngmart.com/files/7/LED-Television-PNG-Transparent.png',
            price:4000,
            description:'This is a dummy product.'
        },
        {
            id:105,
            name:'Bag',
            image:'https://www.kaft.com/resources-3.03.009/images/bag_properties_bag_model_methone.png',
            price:4000,
            description:'This is a dummy product.'
        },
    ],
    cart:{
        username:'',
        list:[],
        count:0
    },
    pids:[],
    add(product){
        this.cart.list.push(product);
        console.log("The list inside the cart is ",this.cart.list);
    }



};