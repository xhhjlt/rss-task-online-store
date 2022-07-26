import ISpaceshipData from "../../model/data/ISpaceshipData";
import IProductsView from "./IProductsView";

class Products implements IProductsView < ISpaceshipData > {
    conteiner: HTMLElement;

    constructor() {
        this.conteiner = document.querySelector(".products-conteiner") as HTMLElement;
    }

    view(ships: Array <ISpaceshipData> , storeCart: Set<string>): void {
        this.conteiner.innerText = '';
        ships.forEach((ship) => this.conteiner.appendChild(this.drawCard(ship, storeCart)));
        const cartCounter: HTMLElement = document.querySelector(".cart-count") as HTMLElement;
        cartCounter.innerText = storeCart.size.toString();
    }

    drawCard(ship: ISpaceshipData, storeCart: Set<string>): HTMLElement {
        const card: HTMLElement = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("shipID", ship.id.toString());
        if (storeCart.has(ship.id.toString())) card.classList.add("in-cart");
        const header: HTMLElement = document.createElement("h4");
        header.innerText = ship.name;
        card.append(header);
        const img: HTMLImageElement = document.createElement("img");
        img.src = require(`../../../img/${ship.image}`)
        card.append(img);
        const description: HTMLElement = document.createElement("p");
        description.innerText = ship.description;
        card.append(description);
        const quote: HTMLElement = document.createElement("p");
        quote.classList.add('quote');
        quote.innerText = `${ship.quote}`;
        card.append(quote);
        const features: HTMLElement = document.createElement("div");
        features.classList.add("features");
        const feat1: HTMLElement = document.createElement("p");
        const feat2: HTMLElement = document.createElement("p");
        const feat3: HTMLElement = document.createElement("p");
        feat1.innerText = `Страна: ${ship.manufacturer} | Год запуска: ${ship.launchYear}`;
        feat2.innerText = `Экипаж: ${ship.crew} | Тип: ${ship.type}`;
        feat3.innerText = `Посадка: ${ship.landing} | В полете: ${ship.inFlight ? 'Да' : 'нет'}`;
        features.append(feat1, feat2, feat3);
        card.append(features);
        const cart: HTMLElement = document.createElement("div");
        cart.classList.add("card-buttons")
        const cartIcon: HTMLImageElement = document.createElement("img");
        cartIcon.src = require("../../../img/cart.svg");
        cart.append(cartIcon);
        card.append(cart);
        return card;
    }
}

export default Products