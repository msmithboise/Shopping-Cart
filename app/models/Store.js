import Guitar from "./Guitar.js";
//PRIVATE

let cart = []


//PUBLIC
class Store {
    constructor (cart){
        this.guitars = [
            new Guitar('Stratocaster', 200, 800, "https://stuff.fendergarage.com/images/Q/a/L/fcwd-products-electric-guitars-stratocaster-01-hero-white-strat.jpg", 10 ),
            new Guitar('Telecaster', 100, 900, "https://www.fmicassets.com/Damroot/ZoomJpg/10002/0110132850_gtr_frt_001_rr.jpg", 10),
            new Guitar('Jazzmaster', 300, 700, "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0113092785_gtr_frt_001_rr.jpg", 10) 
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
        
        return JSON.parse(JSON.stringify(this.guitars))
    }
}




export default Store