interface ISorter<FiltersOptions, ProductType> {
    sort: (products: Array<ProductType>, filters: FiltersOptions) => Array<ProductType>;
}

export default ISorter;