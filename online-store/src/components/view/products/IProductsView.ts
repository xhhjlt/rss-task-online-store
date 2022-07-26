
interface IProductsView<ProductType> {
    view: (products: Array<ProductType>, cart: Array<string>) => void;
}

export default IProductsView;