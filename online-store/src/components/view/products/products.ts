import ISpaceshipData from '../../model/data/ISpaceshipData';
import IProductsView from './IProductsView';

class Products implements IProductsView < ISpaceshipData > {
    conteiner: HTMLElement;

    constructor() {
        this.conteiner = document.querySelector('.products-conteiner') as HTMLElement;
    }

    view(ships: Array <ISpaceshipData> , storeCart: Array<string>): void {
        const cartCounter: HTMLElement = document.querySelector('.cart-count') as HTMLElement;

        while (this.conteiner.firstChild) {
            this.conteiner.removeChild(this.conteiner.firstChild);
        }
        ships.forEach((ship) => this.conteiner.appendChild(this.drawCard(ship, storeCart)));
        cartCounter.innerText = storeCart.length.toString();
    }

    drawCard(ship: ISpaceshipData, storeCart: Array<string>): HTMLElement {
        const card: HTMLElement = document.createElement('div');
        const header: HTMLElement = document.createElement('h4');
        const img: HTMLImageElement = document.createElement('img');
        const description: HTMLElement = document.createElement('p');
        const quote: HTMLElement = document.createElement('p');
        const features: HTMLElement = document.createElement('div');
        const feat1: HTMLElement = document.createElement('p');
        const feat2: HTMLElement = document.createElement('p');
        const feat3: HTMLElement = document.createElement('p');
        const cart: HTMLElement = document.createElement('div');
        const cartIcon: HTMLImageElement = document.createElement('img');

        card.classList.add('card');
        card.setAttribute('shipID', ship.id.toString());
        if (storeCart.includes(ship.id.toString())) {
            card.classList.add('in-cart');
        }

        header.innerText = ship.name;
        card.append(header);

        img.src = require(`../../../img/${ship.image}`);
        card.append(img);

        description.innerText = ship.description;
        card.append(description);

        quote.classList.add('quote');
        quote.innerText = `${ship.quote}`;
        card.append(quote);

        features.classList.add('features');
        feat1.innerText = `Страна: ${ship.manufacturer} | Год запуска: ${ship.launchYear}`;
        feat2.innerText = `Экипаж: ${ship.crew} | Тип: ${ship.type}`;
        feat3.innerText = `Посадка: ${ship.landing} | В полете: ${ship.inFlight ? 'Да' : 'нет'}`;
        features.append(feat1, feat2, feat3);
        card.append(features);

        cart.classList.add('card-buttons');
        cartIcon.src = require('../../../img/cart.svg');
        cart.append(cartIcon);
        card.append(cart);

        return card;
    }
}

export default Products;