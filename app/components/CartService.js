console.log("Hello from CartService.js")

import Store from "../models/Store.js"

//Private 

let gStore = new Store()




// Public to controller

class CartService {
    constructor() {

    }

    getTotal(){
        return gStore.calculateTotals()
    }

    addToCart(id){
        gStore.addToCart(id)
    }

    getGuitars() {
        return gStore.getGuitars()
    }


}


export default CartService