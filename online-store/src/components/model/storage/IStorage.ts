import ILoader from "../data/ILoader";

interface IDataStorage<ProductType, FiltersType> {
    all: Array<ProductType>;
    cart: Set<string>;
    loader: ILoader<ProductType>;

    getAmountInCart: () => number;

    getFilters: () => FiltersType;

    setFilters: (filters: FiltersType) => void;
}

export default IDataStorage;