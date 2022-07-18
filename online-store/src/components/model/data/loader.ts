import ILoader from "./ILoader";
import ISpaceshipData, { Country, LandingType, SpaceflightTypes } from "./ISpaceshipData";

class Loader implements ILoader<ISpaceshipData> {

    getData(): Array<ISpaceshipData> {
        let data: { spacecrafts: Array<ISpaceshipData> };
        try {
            data = require("./warehouse.json");
        } catch (e) {
            console.error("Error: Don't have access to file or file not exist");
            return [];
        }
        if (data?.spacecrafts && Array.isArray(data?.spacecrafts)) {
            return this.validate(data.spacecrafts);
        } else {
            console.error("Error: Wrong file format");
            return [];
        }
    }

    private validate(ships: Array<ISpaceshipData>): Array<ISpaceshipData> {
        ships.forEach(ship => {
            switch (ship.manufacturer.trim().toUpperCase()) {
                case "СССР":
                    ship.manufacturer = Country.ussr;
                    break;
                case "США":
                    ship.manufacturer = Country.usa;
                    break;
                case "КНР":
                    ship.manufacturer = Country.china;
                    break;
                case "ЕС":
                    ship.manufacturer = Country.eu;
                    break;
                default:
                    ship.type = SpaceflightTypes.unknown;
                    break;
            }
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