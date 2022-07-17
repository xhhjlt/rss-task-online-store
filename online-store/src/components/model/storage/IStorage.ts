import ILoader from "../data/ILoader";

interface IDataStorage<ProductType> {
    all: Array<ProductType>;
    current: Array<ProductType>;
    cart: Array<number>;
    loader: ILoader<ProductType>;
}

export default IDataStorage;