import ISpaceshipData from "./data/ISpaceshipData";
import ISpaceshipFilters from "./data/ISpaceshipFilters";
import spaceshipSortOptions from "./data/spaceshipSortOptions";
import Filter from "./filter/filter";
import IFilter from "./filter/IFilter";
import IModel from "./IModel";
import ISorter from "./sorter/ISorter";
import Sorter from "./sorter/sorter";
import IStorage from "./storage/IStorage";
import DataStorage from "./storage/storage";

class Model implements IModel<ISpaceshipFilters, spaceshipSortOptions, ISpaceshipData>{
    storage: IStorage<ISpaceshipData,ISpaceshipFilters>;
    filter: IFilter<ISpaceshipFilters, ISpaceshipData>;
    sorter: ISorter<spaceshipSortOptions, ISpaceshipData>;

    constructor() {
        this.storage = new DataStorage();
        this.filter = new Filter();
        this.sorter = new Sorter();
    }

    getData(): Array<ISpaceshipData> {
        let result = this.storage.all;
        result = this.filter.use(result, this.storage.getFilters());
        return result;
    }

}

export default Model;