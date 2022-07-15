import ISpaceshipData from "../data/ISpaceshipData";
import spaceshipSortOptions from "../data/spaceshipSortOptions";
import ISorter from "./ISorter";

class Sorter implements ISorter<spaceshipSortOptions, ISpaceshipData> {
    currentSort: spaceshipSortOptions;

    constructor() {
        this.currentSort = spaceshipSortOptions.none;
    }

    useOn(ships: Array<ISpaceshipData>): Array<ISpaceshipData> {
        return null as unknown as Array<ISpaceshipData>;
    }
}

export default Sorter;