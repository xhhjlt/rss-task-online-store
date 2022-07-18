import IFilter from "./filter/IFilter";
import ISorter from "./sorter/ISorter";
import IDataStorage from "./storage/IStorage";

interface IModel<Filters, SortOptions, ProductType> {
    storage: IDataStorage<ProductType, Filters>;
    filter: IFilter<Filters, ProductType>;
    sorter: ISorter<SortOptions, ProductType>;
    getData: () => Array<ProductType>;
}

export default IModel;