import ILoader from '../data/ILoader';

interface IDataStorage<ProductType, FiltersType> {
    all: Array<ProductType>;
    cart: Set<string>;
    loader: ILoader<ProductType>;

    addToCart: (product: string) => void;

    removeFromCart: (ship: string) => void;

    cartClear: () => void; 

    getAmountInCart: () => number;

    getFilters: () => FiltersType;

    setFilters: (filters: FiltersType) => void;
}

export default IDataStorage;