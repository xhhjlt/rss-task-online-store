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
        this.view.filters.crewSlider.on("change", () => this.inputHandler());
        this.view.filters.yearSlider.on("change", () => this.inputHandler());
        this.view.filters.crewSlider.on("update", () => {
            const range: Array<number>  = this.view.filters.crewSlider.get(true) as Array<number>;
            this.view.filters.crewLabel.innerHTML = `${range[0]} - ${range[1]}`;
        });
        this.view.filters.yearSlider.on("update", () => {
            const range: Array<number>  = this.view.filters.yearSlider.get(true) as Array<number>;
            this.view.filters.yearLabel.innerHTML = `${range[0]} - ${range[1]}`;
        });
        this.view.filters.yearSlider.on("update", () => this.inputHandler());
        this.view.filters.drawFilters(this.model.storage.getFilters());
        this.view.products.conteiner.addEventListener("click", (event) => this.clickHandler(event))
        this.view.products.view(this.model.getData(), this.model.storage.cart)

    }

    inputHandler(): void {
        this.model.storage.setFilters(this.view.filters.getFilters());
        this.view.products.view(this.model.getData(), this.model.storage.cart)
        if (!this.view.products.conteiner.firstChild) {
            const message = document.createElement("div");
            message.classList.add("card");
            message.innerHTML = "<h4>Извините, совпадений не обнаружено</h4>";
            this.view.products.conteiner.append(message);
        }
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