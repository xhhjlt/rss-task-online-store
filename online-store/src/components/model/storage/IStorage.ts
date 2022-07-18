import ILoader from "../data/ILoader";

interface IDataStorage<ProductType, FiltersType> {
    all: Array<ProductType>;
    cart: Set<number>;
    loader: ILoader<ProductType>;

    getFilters: () => FiltersType;

    setFilters: (filters: FiltersType) => void;
}

export default IDataStorage;