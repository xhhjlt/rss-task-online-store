import { Country, LandingType, SpaceflightTypes } from './ISpaceshipData';
import spaceshipSortOptions from './spaceshipSortOptions';

interface ISpaceshipFilters {
    manufacturer?: Array<Country>;
    type?: Array<SpaceflightTypes>;
    landing?: Array<LandingType>;
    launchYearMin?: number;
    launchYearMax?: number;
    crewMin?: number;
    crewMax?: number;
    inFlight?: boolean;
    search?: string;
    sort?: spaceshipSortOptions;
}

export default ISpaceshipFilters;