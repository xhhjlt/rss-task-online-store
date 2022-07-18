import ISpaceshipData from "../../model/data/ISpaceshipData";
import IProductsView from "./IProductsView";

class Products implements IProductsView<ISpaceshipData> {
    view(ships: Array<ISpaceshipData>): void {
        const conteiner = document.querySelector(".products-conteiner");
        if (conteiner) {
            conteiner.innerHTML = '';
            ships.forEach((ship) => conteiner.appendChild(this.drawCard(ship)));
        }
    }

    drawCard(ship: ISpaceshipData): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("card");
        const header = document.createElement("h4");
        header.innerHTML = ship.name;
        card.append(header);
        const img = document.createElement("img");
        img.src = require(`../../../img/${ship.image}`)
        card.append(img);
        const description = document.createElement("p");
        description.innerHTML = ship.description;
        card.append(description);
        const quote = document.createElement("p");
        quote.innerHTML = `<i>${ship.quote}</i>`;
        card.append(quote);
        const features = document.createElement("div");
        features.classList.add("features");
        features.innerHTML = 
                `<p>Страна: ${ship.manufacturer} | Год запуска: ${ship.launchYear}</p>
                <p>Экипаж: ${ship.crew} | Тип: ${ship.type}</p>
                <p>Посадка: ${ship.landing} | В полете: ${ship.inFlight ? 'Да' : 'нет'}</p>`
        card.append(features);
        const cart = document.createElement("div");
        cart.classList.add("card-buttons")
        const cartIcon = document.createElement("img");
        cartIcon.src = require("../../../img/cart.svg");
        cart.append(cartIcon);
        card.append(cart);
        return card;
    }
}

export default Products