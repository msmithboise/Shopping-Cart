import CartService from "./CartService.js"


//Private
const cService = new CartService()



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
                    <img src="${guitar.img}" alt="">
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

    }
}
drawGuitars()


export default CartController


