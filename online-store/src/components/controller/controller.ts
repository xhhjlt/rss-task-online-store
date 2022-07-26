import ISpaceshipFilters from '../model/data/ISpaceshipFilters';
import Model from '../model/model';
import View from '../view/view';
import IController from './IController';

class Controller implements IController {
    model: Model;
    view: View;

    constructor () {
        this.model = new Model();
        this.view = new View();
        this.view.filters.drawFilters(this.model.storage.getFilters());
        this.view.filters.conteiner.addEventListener('input', () => this.inputHandler());
        this.view.filters.crewSlider.on('change', () => this.inputHandler());
        this.view.filters.yearSlider.on('change', () => this.inputHandler());
        this.view.filters.crewSlider.on('update', () => {
            const range: Array<number>  = this.view.filters.crewSlider.get(true) as Array<number>;
            this.view.filters.crewLabel.innerText = `${range[0]} - ${range[1]}`;
        });
        this.view.filters.yearSlider.on('update', () => {
            const range: Array<number>  = this.view.filters.yearSlider.get(true) as Array<number>;
            this.view.filters.yearLabel.innerText = `${range[0]} - ${range[1]}`;
        });
        this.view.filters.yearSlider.on('update', () => this.inputHandler());
        this.view.filters.resetFilters.addEventListener('click', () => {
            const filters: ISpaceshipFilters = this.model.storage.getFilters();
            this.model.storage.setFilters({sort: filters.sort, search: filters.search});
            this.view.filters.drawFilters(this.model.storage.getFilters());
        });
        this.view.filters.resetAll.addEventListener('click', () => {
            this.model.storage.setFilters({});
            this.model.storage.cartClear();
            const cartCounter: HTMLElement = document.querySelector('.cart-count') as HTMLElement;
            cartCounter.innerText = '0';
            this.view.filters.search.value = '';
            this.view.filters.drawFilters(this.model.storage.getFilters());
        });
        this.view.products.conteiner.addEventListener('click', (event: Event) => this.cardClickHandler(event));
        this.view.products.view(this.model.getData(), this.model.storage.cart);

    }

    inputHandler(): void {
        this.model.storage.setFilters(this.view.filters.getFilters());
        this.view.products.view(this.model.getData(), this.model.storage.cart);
        if (!this.view.products.conteiner.firstChild) {
            const message: HTMLElement = document.createElement('h4');
            message.classList.add('card');
            message.innerText = 'Извините, совпадений не обнаружено';
            this.view.products.conteiner.append(message);
        }
    }

    cardClickHandler(event: Event): void {
        if (event.target instanceof HTMLElement) {
            const card: HTMLElement = event.target.closest('.card') as HTMLElement;
            if (this.model.storage.getAmountInCart() >= 20) {
                alert('Извините, все слоты заполнены');
                return;
            }
            const cardID: string = card?.getAttribute('shipID') + '';
            if (card?.classList.toggle('in-cart')) {
                this.model.storage.addToCart(cardID);
            } else {
                this.model.storage.removeFromCart(cardID);
            }
            const cartCounter: HTMLElement = document.querySelector('.cart-count') as HTMLElement;
            cartCounter.innerText =  this.model.storage.getAmountInCart().toString();
        }
    }
}

export default Controller;