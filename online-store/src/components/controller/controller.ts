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
        this.view.products.conteiner.addEventListener("click", (event) => this.clickHandler(event))
        this.view.products.view(this.model.getData(), this.model.storage.cart)

    }

    inputHandler(): void {
        this.model.storage.setFilters(this.view.filters.getFilters());
        this.view.products.view(this.model.getData(), this.model.storage.cart)
    }

    clickHandler(event: Event): void {
        if (event.target instanceof HTMLElement) {
            const card: HTMLElement = event.target.closest(".card") as HTMLElement;
            if (this.model.storage.getAmountInCart() >= 20) {
                alert("Извините, все слоты заполнены");
                return
            }
            const cardID: string = card?.getAttribute("shipID") + "";
            if (card?.classList.toggle("in-cart")) {
                this.model.storage.cart.add(cardID);
            } else {
                this.model.storage.cart.delete(cardID)
            }
            const cartCounter: HTMLElement = document.querySelector(".cart-count") as HTMLElement;
            cartCounter.innerHTML =  this.model.storage.getAmountInCart().toString();
        }
    }
}

export default Controller;