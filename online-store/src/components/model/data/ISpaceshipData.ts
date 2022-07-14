import IProductData from "./IProductData";

export enum ShipClass {
    orbital = "Orbital",
    interplanetary = "Interplanetary",
    interstellar = "Interstellar",
}

export enum EngineType {
    rocket = "rocket",
}

interface ISpaceshipData extends IProductData {
    id: number;
    name: string;
    image: string;
    description: string;
    quote: string;
    manufacturer: string;
    year: number;
    capacity: number;
    crew: number;
    shipClass: ShipClass;
    engine: EngineType;
    popular: boolean;
}

export default ISpaceshipData;