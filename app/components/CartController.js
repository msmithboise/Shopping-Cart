import CartService from "./CartService.js"


//Private
const cService = new CartService()



function drawGuitars(){
    let guitars = cService.getGuitars()
    console.log(guitars)

    //template loop
}


// Public
class CartController {
    constructor(){

        
    }
    
    addToCart(id){
        
    }
}
drawGuitars()


export default CartController