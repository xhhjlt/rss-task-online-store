import ILoader from "../data/ILoader";
import ISpaceshipData from "../data/ISpaceshipData";
import ISpaceshipFilters from "../data/ISpaceshipFilters";
import Loader from "../data/loader";
import IStorage from "./IStorage";

class DataStorage implements IStorage<ISpaceshipData, ISpaceshipFilters> {
    all: Array<ISpaceshipData>;
    currentfilters: ISpaceshipFilters;
    cart: Set<number>;
    loader: ILoader<ISpaceshipData>;

    constructor() {
        this.loader = new Loader();
        this.all = this.loader.getData();
        this.cart = new Set<number>;
        this.currentfilters = {};
    }

    getAmountInCart(): number {
        return this.cart.size;
    }

    getFilters(): ISpaceshipFilters {
        return this.currentfilters;
    }

    setFilters(filters: ISpaceshipFilters) {
        this.currentfilters = filters;
    }
}

export default DataStorage;