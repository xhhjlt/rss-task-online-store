import ISpaceshipData from "../data/ISpaceshipData";
import spaceshipSortOptions from "../data/spaceshipSortOptions";
import ISorter from "./ISorter";

class Sorter implements ISorter<spaceshipSortOptions, ISpaceshipData> {
    currentSort: spaceshipSortOptions;

    constructor() {
        this.currentSort = spaceshipSortOptions.none;
    }

    useOn(ships: Array<ISpaceshipData> = []): Array<ISpaceshipData> {
        switch (this.currentSort) {
            case spaceshipSortOptions.nameForward:
                ships.sort(this.byName);
                break;
            case spaceshipSortOptions.nameBackward:
                ships.sort(this.byNameBack);
                break;
            case spaceshipSortOptions.yearForward:
                ships.sort(this.byYear);
                break;
            case spaceshipSortOptions.yearBackward:
                ships.sort(this.byYearBack);
                break;
            case spaceshipSortOptions.crewForward:
                ships.sort(this.byCrew);
                break;
            case spaceshipSortOptions.crewBackward:
                ships.sort(this.byCrewBack);
                break;
        
            default:
                break;
        }
        return ships;
    }

    byName(a: ISpaceshipData, b: ISpaceshipData) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    byNameBack(a: ISpaceshipData, b: ISpaceshipData) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
    }

    byYear(a: ISpaceshipData, b: ISpaceshipData) {
        return a.launchYear - b.launchYear;
    }

    byYearBack(a: ISpaceshipData, b: ISpaceshipData) {
        return b.launchYear - a.launchYear;
    }

    byCrew(a: ISpaceshipData, b: ISpaceshipData) {
        return a.crew - b.crew;
    }

    byCrewBack(a: ISpaceshipData, b: ISpaceshipData) {
        return b.crew - a.crew;
    }
}

export default Sorter;