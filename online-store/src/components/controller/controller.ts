import Model from "../model/model";
import View from "../view/view";
import IController from "./IController";

class Controller implements IController {
    model: Model;
    view: View;

    constructor () {
        this.model = new Model();
        this.view = new View();
        this.view.filters.conteiner.addEventListener("input", () => this.inputHandler());
        this.view.filters.drawFilters(this.model.storage.getFilters());
        this.view.products.view(this.model.getData())

    }

    inputHandler(): void {
        this.model.storage.setFilters(this.view.filters.getFilters());
        this.view.products.view(this.model.getData())
    }
}

export default Controller;