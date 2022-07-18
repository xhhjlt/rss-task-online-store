import ISpaceshipData from "../data/ISpaceshipData";
import ISeeker from "./ISeeker";

class Seeker implements ISeeker<ISpaceshipData> {

    search(ships: Array<ISpaceshipData>, keyword: string): Array<ISpaceshipData> {
        return ships.filter(((ship: ISpaceshipData): boolean => ship.name.toLowerCase().includes(keyword)))
    }
}

export default Seeker;