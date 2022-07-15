import ISpaceshipData from "../data/ISpaceshipData";
import spaceshipSortOptions from "../data/spaceshipSortOptions";
import ISorter from "./ISorter";

class Sorter implements ISorter<spaceshipSortOptions, ISpaceshipData> {
    currentSort: spaceshipSortOptions;

    constructor() {
        this.currentSort = spaceshipSortOptions.none;
    }

    useOn(ships: Array<ISpaceshipData>): Array<ISpaceshipData> {
        let result: Array<ISpaceshipData> = [];
        switch (this.currentSort) {
            case spaceshipSortOptions.nameBackward:
                
                break;
        
            default:
                result = ships;
                break;
        }
        return result;
    }
}

export default Sorter;