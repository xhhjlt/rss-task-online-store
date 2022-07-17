import IFilter from "./filter/IFilter";
import ISeeker from "./seeker/ISeeker";
import ISorter from "./sorter/ISorter";
import IDataStorage from "./storage/IStorage";

interface IModel<Filters, SortOptions, ProductType> {
    storage: IDataStorage<ProductType>;
    filter: IFilter<Filters, ProductType>;
    sorter: ISorter<SortOptions, ProductType>;
    seeker: ISeeker<ProductType>;
    getData: () => Array<ProductType>;
    filterProducts: () => void;
    sortProducts: () => void;
    searchProducts: (keyword: string) => void;
}

export default IModel;