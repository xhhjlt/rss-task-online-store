import IFiltersView from "./filters/IFiltersView";
import IProductsView from "./products/IProductsView";

interface IView {
    filters: IFiltersView;
    products: IProductsView;
}

export default IView;