import ISpaceshipData from '../data/ISpaceshipData';
import ISpaceshipFilters from '../data/ISpaceshipFilters';
import spaceshipSortOptions from '../data/spaceshipSortOptions';
import ISorter from './ISorter';

class Sorter implements ISorter<ISpaceshipFilters, ISpaceshipData> {

    sort(ships: Array<ISpaceshipData> = [], filters : ISpaceshipFilters): Array<ISpaceshipData> {
        switch (filters.sort) {
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
            ships.sort(this.byName);
            break;
        }
        return ships;
    }

    private byName(a: ISpaceshipData, b: ISpaceshipData) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }

    private byNameBack(a: ISpaceshipData, b: ISpaceshipData) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
    }

    private byYear(a: ISpaceshipData, b: ISpaceshipData) {
        return a.launchYear - b.launchYear;
    }

    private byYearBack(a: ISpaceshipData, b: ISpaceshipData) {
        return b.launchYear - a.launchYear;
    }

    private byCrew(a: ISpaceshipData, b: ISpaceshipData) {
        return a.crew - b.crew;
    }

    private byCrewBack(a: ISpaceshipData, b: ISpaceshipData) {
        return b.crew - a.crew;
    }
}

export default Sorter;