interface IFilter<Filters, ProductType> {
    currentFilters: Filters;
    useOn: (products: Array<ProductType>) => Array<ProductType>;
}

export default IFilter;