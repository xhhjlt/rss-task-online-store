import ILoader from "./ILoader";
import ISpaceshipData, { LandingType, SpaceflightTypes } from "./ISpaceshipData";

class Loader implements ILoader<ISpaceshipData> {
    ships: Array<ISpaceshipData>;

    constructor() {
        let data: { spacecrafts: Array<ISpaceshipData> };
        try {
            data = require("./warehouse.json");
        } catch (e) {
            console.error("Error: Don't have access to file or file not exist");
            this.ships = [];
            return;
        }
        if (data?.spacecrafts && Array.isArray(data?.spacecrafts)) {
            this.ships = this.validate(data.spacecrafts);
        } else {
            console.error("Error: Wrong file format");
            this.ships = [];
        }
    }

    getData(): Array<ISpaceshipData> {
        return this.ships;
    }

    private validate(ships: Array<ISpaceshipData>): Array<ISpaceshipData> {
        ships.forEach(ship => {
            switch (ship.type.trim().toLowerCase()) {
                case "орбитальный":
                    ship.type = SpaceflightTypes.orbital;
                    break;
                case "межпланетный":
                    ship.type = SpaceflightTypes.interplanetary;
                    break;
                case "межзвездный":
                    ship.type = SpaceflightTypes.interstellar;
                    break;
                default:
                    ship.type = SpaceflightTypes.unknown;
                    break;
            }
            switch (ship.landing.trim().toLowerCase()) {
                case "мягкая":
                    ship.landing = LandingType.soft;
                    break;
                case "жесткая":
                    ship.landing = LandingType.crash;
                    break;
                case "нет":
                    ship.landing = LandingType.none;
                    break;
                default:
                    ship.landing = LandingType.unknown;
                    break;
            }
        });
        return ships;    
    }
    
}

export default Loader;