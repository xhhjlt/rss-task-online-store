import ILoader from "./ILoader";
import ISpaceshipData, { LandingType, SpaceflightTypes } from "./ISpaceshipData";

class Loader implements ILoader<ISpaceshipData> {
    ships: Array<ISpaceshipData>;

    constructor(localUrl: string) {
        const data = require(localUrl);
        this.ships = data.spacecrafts;
    }

    loadData: () => Array<ISpaceshipData> = () => {
        return this.validate(this.ships);
    }

    private validate: (ships: Array<ISpaceshipData>) => Array<ISpaceshipData> = (ships) => {
        
        return ships;    
    }
    
}

export default Loader;