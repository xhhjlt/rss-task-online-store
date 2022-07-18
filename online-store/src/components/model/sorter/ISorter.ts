interface ISorter<SortOptions, ProductType> {
    currentSort: SortOptions;
    useOn: (products: Array<ProductType>) => Array<ProductType>;
}

export default ISorter;