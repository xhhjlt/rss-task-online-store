import ILoader from '../data/ILoader';
import ISpaceshipData from '../data/ISpaceshipData';
import ISpaceshipFilters from '../data/ISpaceshipFilters';
import Loader from '../data/loader';
import IStorage from './IStorage';

class DataStorage implements IStorage<ISpaceshipData, ISpaceshipFilters> {
    all: Array<ISpaceshipData>;
    currentfilters: ISpaceshipFilters;
    cart: Set<string>;
    loader: ILoader<ISpaceshipData>;

    constructor() {
        this.loader = new Loader();
        this.all = this.loader.getData();
        const arr: Array<string> = [];
        this.all.forEach((ship) => {
            if (localStorage.getItem(ship.id.toString()) === 'true') arr.push(ship.id.toString());
        });
        this.cart = new Set<string>(arr);
        this.currentfilters = JSON.parse(localStorage.getItem('filters') || '{}');
    }

    addToCart(ship: string): void {
        this.cart.add(ship);
        localStorage.setItem(`${ship}`, 'true');
    }

    removeFromCart(ship: string): void {
        this.cart.delete(ship);
        localStorage.removeItem(`${ship}`);
    }

    cartClear(): void {
        this.cart.forEach((ship: string) =>{
            localStorage.removeItem(`${ship}`);
        });
        this.cart.clear();
    }

    getAmountInCart(): number {
        return this.cart.size;
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