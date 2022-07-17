import ISpaceshipData from "./data/ISpaceshipData";
import ISpaceshipFilters from "./data/ISpaceshipFilters";
import spaceshipSortOptions from "./data/spaceshipSortOptions";
import Filter from "./filter/filter";
import IFilter from "./filter/IFilter";
import IModel from "./IModel";
import ISeeker from "./seeker/ISeeker";
import Seeker from "./seeker/seeker";
import ISorter from "./sorter/ISorter";
import Sorter from "./sorter/sorter";
import IStorage from "./storage/IStorage";
import DataStorage from "./storage/storage";

class Model implements IModel<ISpaceshipFilters, spaceshipSortOptions, ISpaceshipData>{
    storage: IStorage<ISpaceshipData>;
    filter: IFilter<ISpaceshipFilters, ISpaceshipData>;
    sorter: ISorter<spaceshipSortOptions, ISpaceshipData>;
    seeker: ISeeker<ISpaceshipData>;

    constructor() {
        this.storage = new DataStorage();
        this.filter = new Filter();
        this.sorter = new Sorter();
        this.seeker = new Seeker();
    }

    getData(): Array<ISpaceshipData> {
        return this.storage.current
    }

    //filterProducts: () => void;
    //sortProducts: () => void;
    //searchProducts: (keyword: string) => void;

}

export default Model;