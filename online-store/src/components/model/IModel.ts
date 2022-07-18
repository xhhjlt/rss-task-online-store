import IFilter from "./filter/IFilter";
import ISorter from "./sorter/ISorter";
import IDataStorage from "./storage/IStorage";

interface IModel<Filters, ProductType> {
    storage: IDataStorage<ProductType, Filters>;
    filter: IFilter<Filters, ProductType>;
    sorter: ISorter<Filters, ProductType>;
    getData: () => Array<ProductType>;
}

export default IModel;