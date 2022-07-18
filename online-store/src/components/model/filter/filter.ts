import ISpaceshipData from "../data/ISpaceshipData";
import ISpaceshipFilters from "../data/ISpaceshipFilters";
import IFilter from "./IFilter";

class Filter implements IFilter<ISpaceshipFilters, ISpaceshipData> {
    currentFilters: ISpaceshipFilters;

    constructor() {
        this.currentFilters = {};
    }

    useOn(ships: Array<ISpaceshipData>): Array<ISpaceshipData> {
       return ships.filter((ship: ISpaceshipData): boolean => {
            if (this.currentFilters.manufacturer) {
                if (!this.currentFilters.manufacturer.has(ship.manufacturer)
                    && this.currentFilters.manufacturer.size > 0)
                return false;
            }
            if (this.currentFilters.type) {
                if (!this.currentFilters.type.has(ship.type)
                    && this.currentFilters.type.size > 0)
                return false;
            }
            if (this.currentFilters.landing) {
                if (!this.currentFilters.landing.has(ship.landing)
                    && this.currentFilters.landing.size > 0)
                return false;
            }
            if (this.currentFilters.inFlight) {
                if (!ship.inFlight) 
                return false; 
            }
            if (this.currentFilters.launchYearMin) {
                if (ship.launchYear < this.currentFilters.launchYearMin)
                return false;
            }
            if (this.currentFilters.launchYearMax) {
                if (ship.launchYear > this.currentFilters.launchYearMax)
                return false;
            }
            if (this.currentFilters.crewMin || this.currentFilters.crewMin === 0){
                if (ship.crew < this.currentFilters.crewMin)
                return false;
            }
            if (this.currentFilters.crewMax || this.currentFilters.crewMax === 0){
                if (ship.crew > this.currentFilters.crewMax)
                return false;
            }
            return true;
        })
    }
}

export default Filter;