import Model from "../model/model";
import View from "../view/view";
import IController from "./IController";

class Controller implements IController {
    model: Model;
    view: View;

    constructor () {
        this.model = new Model();
        this.view = new View();
    }
}

export default Controller;