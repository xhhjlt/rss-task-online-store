import ILoader from "../data/ILoader";

interface IStorage<T> {
    all: Array<T>;
    current: Array<T>;
    cart: Array<T>;
    loader: ILoader<T>;
}

export default IStorage;