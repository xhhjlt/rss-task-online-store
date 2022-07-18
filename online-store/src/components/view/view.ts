import ISpaceshipData from "../model/data/ISpaceshipData";
import Filters from "./filters/filters";
import IView from "./IView";
import Products from "./products/products";

class View implements IView<ISpaceshipData> {
    filters: Filters;
    products: Products;

    constructor() {
        this.filters = new Filters();
        this.products = new Products();
    }
}

export default View;