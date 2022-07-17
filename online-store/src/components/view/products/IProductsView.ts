
interface IProductsView<ProductType> {
    view: (products: Array<ProductType>) => void;
}

export default IProductsView;