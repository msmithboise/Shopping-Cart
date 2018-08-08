console.log("Hello from CartService.js")

import Store from "../models/Store.js"
import Products from "../models/Products.js"

//Private 

let guitarProducts = new Products()




// Public to controller

class CartService {
    constructor() {

    }
}


getItems(){
    return guitarProducts.getItems
}


export default CartService