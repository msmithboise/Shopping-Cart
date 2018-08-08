console.log("Hello from Products.js")

class Products {
    constructor() {

        this.guitars = [{
            name: "Telecaster",
            id:100,
            img: "https://www.fmicassets.com/Damroot/ZoomJpg/10002/0110132850_gtr_frt_001_rr.jpg",
            price: 900,
            quantity: 10
        },
        {
            name: "Stratocaster",
            id:200,
            img: "https://stuff.fendergarage.com/images/Q/a/L/fcwd-products-electric-guitars-stratocaster-01-hero-white-strat.jpg",
            price: 800,
            quantity: 10

        },
        {
            name: "Jazzmaster",
            id:300,
            img: "https://www.fmicassets.com/Damroot/ZoomJpg/10001/0113092785_gtr_frt_001_rr.jpg",
            price: 700,
            quantity: 10
        }]
        
    }


}


function getItems(){
    return this.guitars
}

export default Products
