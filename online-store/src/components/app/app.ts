import Controller from "../controller/controller";
import View from "../view/view";
import IApp from "./IApp";

class App implements IApp {
    controller: Controller;
    view: View;
    constructor() {
        this.controller = new Controller;
        this.view = new View;
    }
    start() {
        console.log("Start App");
    }
}

export default App;