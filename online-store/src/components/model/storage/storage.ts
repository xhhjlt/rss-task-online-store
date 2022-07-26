import ILoader from '../data/ILoader';
import ISpaceshipData from '../data/ISpaceshipData';
import ISpaceshipFilters from '../data/ISpaceshipFilters';
import Loader from '../data/loader';
import IStorage from './IStorage';

class DataStorage implements IStorage<ISpaceshipData, ISpaceshipFilters> {
    all: Array<ISpaceshipData>;
    currentfilters: ISpaceshipFilters;
    cart: Array<string>;
    loader: ILoader<ISpaceshipData>;

    constructor() {
        this.loader = new Loader();
        this.all = this.loader.getData();
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.currentfilters = JSON.parse(localStorage.getItem('filters') || '{}');
    }

    addToCart(ship: string): void {
        this.cart = Array.from((new Set<string>(this.cart)).add(ship));
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    removeFromCart(ship: string): void {
        this.cart.splice(this.cart.indexOf(ship), 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    cartClear(): void {
        localStorage.removeItem('cart');
        this.cart = [];
    }

    getAmountInCart(): number {
        return this.cart.length;
    }

    getFilters(): ISpaceshipFilters {
        return this.currentfilters;
    }

    setFilters(filters: ISpaceshipFilters) {
        this.currentfilters = filters;
        localStorage.clear();
        this.cart.forEach((item: string) => {
            this.addToCart(item);
        });
        localStorage.setItem('filters', JSON.stringify(filters));
    }
}

export default DataStorage;