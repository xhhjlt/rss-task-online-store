import ISpaceshipFilters from '../model/data/ISpaceshipFilters';
import Model from '../model/model';
import View from '../view/view';
import IController from './IController';

class Controller implements IController {
    model: Model;
    view: View;

    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    inputHandler: () => void = () => {
        this.model.storage.setFilters(this.view.filters.getFilters());

        this.view.products.view(this.model.getData(), this.model.storage.cart);

        if (!this.view.products.conteiner.firstChild) {
            const message: HTMLElement = document.createElement('h4');
            message.classList.add('card');
            message.innerText = 'Извините, совпадений не обнаружено';
            this.view.products.conteiner.append(message);
        }
    };

    cardClickHandler: (event: Event) => void = (event: Event) => {
        if (event.target instanceof HTMLElement) {
            const card: HTMLElement = event.target.closest('.card') as HTMLElement;
            const cardID: string = card?.getAttribute('shipID') + '';
            const cartCounter: HTMLElement = document.querySelector('.cart-count') as HTMLElement;

            if (this.model.storage.getAmountInCart() >= 9) {
                alert('Извините, все слоты заполнены');
                return;
            }

            if (card?.classList.toggle('in-cart')) {
                this.model.storage.addToCart(cardID);
            } else {
                this.model.storage.removeFromCart(cardID);
            }

            cartCounter.innerText = this.model.storage.getAmountInCart().toString();
        }
    };

    init = () => {
        this.view.filters.drawFilters(this.model.storage.getFilters());
        this.view.filters.conteiner.addEventListener('input', this.inputHandler);

        this.view.filters.crewSlider.on('update', () => {
            const range: Array<number>  = this.view.filters.crewSlider.get(true) as Array<number>;
            this.view.filters.crewLabel.innerText = `${range[0]} - ${range[1]}`;
            this.inputHandler();
        });

        this.view.filters.yearSlider.on('update', () => {
            const range: Array<number>  = this.view.filters.yearSlider.get(true) as Array<number>;
            this.view.filters.yearLabel.innerText = `${range[0]} - ${range[1]}`;
            this.inputHandler();
        });
        
        this.view.filters.resetFilters.addEventListener('click', () => {
            const filters: ISpaceshipFilters = this.model.storage.getFilters();
            this.model.storage.setFilters({sort: filters.sort, search: filters.search});
            this.view.filters.drawFilters(this.model.storage.getFilters());
        });

        this.view.filters.resetAll.addEventListener('click', () => {
            const cartCounter: HTMLElement = document.querySelector('.cart-count') as HTMLElement;
            this.model.storage.setFilters({});
            this.model.storage.cartClear();
            cartCounter.innerText = '0';
            this.view.filters.search.value = '';
            this.view.filters.drawFilters(this.model.storage.getFilters());
        });

        this.view.products.conteiner.addEventListener('click', this.cardClickHandler);

        this.view.products.view(this.model.getData(), this.model.storage.cart);
    };
}

export default Controller;