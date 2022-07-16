import { Set } from "typescript";
import { LandingType, SpaceflightTypes } from "./ISpaceshipData";

interface ISpaceshipFilters {
    manufacturer?: Set<string>;
    type?: Set<SpaceflightTypes>;
    landing?: Set<LandingType>;
    launchYearMin?: number;
    launchYearMax?: number;
    crewMin?: number;
    crewMax?: number;
    inFlight?: boolean;
}

export default ISpaceshipFilters;