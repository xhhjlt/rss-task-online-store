import IProductData from './IProductData';

export enum SpaceflightTypes {
    orbital = 'орбитальный',
    interplanetary = 'межпланетный',
    interstellar = 'межзвездный',
    unknown = 'неизвестно'
}

export enum LandingType {
    soft = 'мягкая',
    crash = 'жесткая',
    none = 'нет',
    unknown = 'неизвестно'
}

export enum Country {
    ussr = 'СССР',
    usa = 'США',
    china = 'КНР',
    eu = 'ЕС',
    unknown = 'НЕИЗВЕСТНО'
}

interface ISpaceshipData extends IProductData {
    id: number;
    name: string;
    image: string;
    description: string;
    quote: string;
    manufacturer: Country;
    launchYear: number;
    crew: number;
    type: SpaceflightTypes;
    landing: LandingType;
    inFlight: boolean;
}

export default ISpaceshipData;