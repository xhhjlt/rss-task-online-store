import ILoader from "../data/ILoader";
import ISpaceshipData from "../data/ISpaceshipData";
import Loader from "../data/loader";
import IStorage from "./IStorage";

class Storge implements IStorage<ISpaceshipData> {
    all: Array<ISpaceshipData>;
    current: Array<ISpaceshipData>;
    cart: Array<number>;
    loader: ILoader<ISpaceshipData>;

    constructor() {
        this.loader = new Loader("../data/warehouse.json")
        this.all = this.loader.getData();
        this.current = [];
        this.cart = [];
    }

    getAmountInCart(): number {
        return this.cart.reduce((sum: number, curr: number):number => sum + curr, 0)
    }
}

export default Storge;