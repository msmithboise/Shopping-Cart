import Guitar from "./Guitar.js";
//PRIVATE

let cart = []


//PUBLIC
class Store {
    constructor (cart){
        this.guitars = [
            new Guitar('Stratocaster', 200, 800, "https://stuff.fendergarage.com/images/Q/a/L/fcwd-products-electric-guitars-stratocaster-01-hero-white-strat.jpg", 10 ),
            new Guitar()
        ]
    }

    // function that will allow user to click on item and place it in their cart

    addToCart(){
    
        let totals = this.calculateTotals()
        return {
            cart: JSON.parse(JSON.stringify(this.cart)),
            totals: totals
        }
    }

// function when item is added to cart, the subtotal will change
    calculateTotals(){
        let total ={
            subTotal: 0,
            tax: 0,
            total: 0
        }
        cart.forEach(guitar =>{
            subTotal+= guitar.price
        })
        total.tax = subTotal * .6
        total.total = subTotal + tax

        return total
    }

    getGuitars(){
        debugger
        return JSON.parse(JSON.stringify(this.guitars))
    }
}




// },
// {
//     name: "Jazzmaster",
//     id:300,
//     img: "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0113092785_gtr_frt_001_rr.jpg",
//     price: 700,
//     quantity: 10
// }

// this.guitars = [{
//     name: "Telecaster",
//     id:100,
//     img: "https://www.fmicassets.com/Damroot/ZoomJpg/10002/0110132850_gtr_frt_001_rr.jpg",
//     price: 900,
//     quantity: 10
// },
// ]

















export default Store