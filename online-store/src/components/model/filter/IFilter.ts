interface IFilter<Filters, ProductType> {
    use: (products: Array<ProductType>, filters: Filters) => Array<ProductType>;
}

export default IFilter;