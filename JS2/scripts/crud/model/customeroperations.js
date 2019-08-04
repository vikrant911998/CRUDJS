const customeroperations = {
    customers:[],
    add(customerObj){
        this.customers.push(customerObj);
        console.log("Added ",this.customers);
    }
}