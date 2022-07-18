
interface IProductsView<ProductType> {
    view: (products: Array<ProductType>, cart: Set<string>) => void;
}

export default IProductsView;