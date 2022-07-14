import IFilter from "./filter/IFilter";
import ISeeker from "./seeker/ISeeker";
import ISorter from "./sorter/ISorter";
import IStorage from "./storage/IStorage";

interface IModel<T> {
    storage: IStorage<T>;
    filter: IFilter<T>;
    sorter: ISorter<T>;
    seeker: ISeeker<T>;
    getData: () => void;
    filterProducts: () => void;
    sortProducts: () => void;
    searchProducts: (keyword: string) => void;
}

export default IModel;