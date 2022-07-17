import Controller from "../controller/controller";
import Model from "../model/model";
import View from "../view/view";
import IApp from "./IApp";

class App implements IApp {
    controller: Controller;

    constructor() {
        this.controller = new Controller;
    }
    
    start() {
        console.log("Start App");
        
    }
}

export default App;