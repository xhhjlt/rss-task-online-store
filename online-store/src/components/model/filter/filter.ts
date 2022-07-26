import ISpaceshipData from '../data/ISpaceshipData';
import ISpaceshipFilters from '../data/ISpaceshipFilters';
import IFilter from './IFilter';

class Filter implements IFilter<ISpaceshipFilters, ISpaceshipData> {

    use(ships: Array<ISpaceshipData>, currentFilters: ISpaceshipFilters): Array<ISpaceshipData> {
        return ships.filter((ship: ISpaceshipData): boolean => {
            if (currentFilters.manufacturer) {
                if (!currentFilters.manufacturer.includes(ship.manufacturer)
                    && currentFilters.manufacturer.length > 0)
                    return false;
            }
            if (currentFilters.type) {
                if (!currentFilters.type.includes(ship.type)
                    && currentFilters.type.length > 0)
                    return false;
            }
            if (currentFilters.landing) {
                if (!currentFilters.landing.includes(ship.landing)
                    && currentFilters.landing.length > 0)
                    return false;
            }
            if (currentFilters.inFlight) {
                if (!ship.inFlight) 
                    return false; 
            }
            if (currentFilters.launchYearMin) {
                if (ship.launchYear < currentFilters.launchYearMin)
                    return false;
            }
            if (currentFilters.launchYearMax) {
                if (ship.launchYear > currentFilters.launchYearMax)
                    return false;
            }
            if (currentFilters.crewMin || currentFilters.crewMin === 0){
                if (ship.crew < currentFilters.crewMin)
                    return false;
            }
            if (currentFilters.crewMax || currentFilters.crewMax === 0){
                if (ship.crew > currentFilters.crewMax)
                    return false;
            }
            if (currentFilters.search) {
                if (!ship.name.toUpperCase().includes(currentFilters.search.toUpperCase()))
                    return false;
            }
            return true;
        });
    }
}

export default Filter;