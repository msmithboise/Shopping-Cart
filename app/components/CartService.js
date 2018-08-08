console.log("Hello from CartService.js")

import Store from "../models/Store.js"

//Private 

let gStore = new Store()




// Public to controller

class CartService {
    constructor() {

    }
    getGuitars() {
        return gStore.getGuitars()
    }


}


export default CartService