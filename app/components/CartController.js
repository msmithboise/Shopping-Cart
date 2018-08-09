import CartService from "./CartService.js"


//Private
const cService = new CartService()


function drawTotal(){
    let total = cService.getTotal()
    console.log(total)
    // build a h1 div with a string template to show total
}


function drawGuitars() {
    let guitars = cService.getGuitars()
    console.log(guitars)
    let template = ' '
    for (let i = 0; i < guitars.length; i++) {
        const guitar = guitars[i];
        template +=

            `
            <div>
                <div class="guitar" onclick="app.controllers.cCtrl">
                    <img class="url" src="${guitar.img}" alt="">
                    <button type="button" class="btn btn-dark" onclick="app.controllers.cCtrl.addToCart('${guitar.id}')">Add to cart</button>
                        <h3> "${guitar.price}"</h3>
            </div>
                </div>`

    }
    document.getElementById("guitars").innerHTML = template





    //template loop
}


// Public
class CartController {
    constructor() {


    }

    addToCart(id) {
        cService.addToCart(id)
        drawTotal()
    }

    
}
drawGuitars()
drawTotal()


export default CartController


