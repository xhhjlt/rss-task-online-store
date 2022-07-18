import { Set } from "typescript";
import { Country, LandingType, SpaceflightTypes } from "./ISpaceshipData";

interface ISpaceshipFilters {
    manufacturer?: Set<Country>;
    type?: Set<SpaceflightTypes>;
    landing?: Set<LandingType>;
    launchYearMin?: number;
    launchYearMax?: number;
    crewMin?: number;
    crewMax?: number;
    inFlight?: boolean;
}

export default ISpaceshipFilters;