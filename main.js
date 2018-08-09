import CartController from "./app/components/CartController.js"



console.log("Hello from main.js")
class App{
    constructor(){
        this.controllers = {
            cCtrl: new CartController()
        }
    }
}

window.app = new App()



// window.app = new App();