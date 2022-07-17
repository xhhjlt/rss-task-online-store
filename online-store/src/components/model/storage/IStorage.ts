import ILoader from "../data/ILoader";

interface IStorage<ProductType> {
    all: Array<ProductType>;
    current: Array<ProductType>;
    cart: Array<number>;
    loader: ILoader<ProductType>;
}

export default IStorage;