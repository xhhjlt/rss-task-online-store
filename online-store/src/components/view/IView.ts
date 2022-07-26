import IFiltersView from './filters/IFiltersView';
import IProductsView from './products/IProductsView';

interface IView<ProductData> {
    filters: IFiltersView;
    products: IProductsView<ProductData>;
}

export default IView;