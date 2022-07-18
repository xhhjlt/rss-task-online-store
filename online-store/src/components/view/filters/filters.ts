import { Country, LandingType, SpaceflightTypes } from "../../model/data/ISpaceshipData";
import ISpaceshipFilters from "../../model/data/ISpaceshipFilters";
import IFiltersView from "./IFiltersView";

class Filters implements IFiltersView {
    conteiner: HTMLElement;
    ussr: HTMLInputElement;
    usa: HTMLInputElement;
    china: HTMLInputElement;
    eu: HTMLInputElement;
    orbital: HTMLInputElement;
    interplanetary: HTMLInputElement;
    interstellar: HTMLInputElement;
    soft: HTMLInputElement;
    crash: HTMLInputElement;
    none: HTMLInputElement;
    flight: HTMLInputElement;
    crew: HTMLInputElement;
    year: HTMLInputElement;
    search: HTMLInputElement;
    sort: HTMLInputElement;

    constructor() {
        this.conteiner = document.querySelector(".filters-conteiner") as HTMLElement;
        this.ussr = document.querySelector("#ussr") as HTMLInputElement;
        this.usa = document.querySelector("#usa") as HTMLInputElement;
        this.china = document.querySelector("#china") as HTMLInputElement;
        this.eu = document.querySelector("#eu") as HTMLInputElement;
        this.orbital = document.querySelector("#orbital") as HTMLInputElement;
        this.interplanetary = document.querySelector("#interplanetary") as HTMLInputElement;
        this.interstellar = document.querySelector("#interstellar") as HTMLInputElement;
        this.soft = document.querySelector("#soft") as HTMLInputElement;
        this.crash = document.querySelector("#crash") as HTMLInputElement;
        this.none = document.querySelector("#none") as HTMLInputElement;
        this.flight = document.querySelector("#flight") as HTMLInputElement;
        this.crew = document.querySelector("#crew") as HTMLInputElement;
        this.year = document.querySelector("#year") as HTMLInputElement;
        this.search = document.querySelector("#search") as HTMLInputElement;
        this.sort = document.querySelector("#sort") as HTMLInputElement;
    }

    getFilters(): ISpaceshipFilters {
        const result: ISpaceshipFilters = {};
        result.manufacturer = new Set<Country>();
        if (this.ussr.checked) result.manufacturer.add(Country.ussr);
        if (this.usa.checked) result.manufacturer.add(Country.usa);
        if (this.china.checked) result.manufacturer.add(Country.china);
        if (this.eu.checked) result.manufacturer.add(Country.eu);
        result.type = new Set<SpaceflightTypes>();
        if (this.orbital.checked) result.type.add(SpaceflightTypes.orbital);
        if (this.interplanetary.checked) result.type.add(SpaceflightTypes.interplanetary);
        if (this.interstellar.checked) result.type.add(SpaceflightTypes.interstellar);
        result.landing = new Set<LandingType>();
        if (this.soft.checked) result.landing.add(LandingType.soft);
        if (this.crash.checked) result.landing.add(LandingType.crash);
        if (this.none.checked) result.landing.add(LandingType.none);
        result.inFlight = this.flight?.checked;
        return result;
    }

    drawFilters(filters: ISpaceshipFilters): void {
        this.ussr.checked = Boolean(filters.manufacturer?.has(Country.ussr));
        this.usa.checked = Boolean(filters.manufacturer?.has(Country.usa));
        this.china.checked = Boolean(filters.manufacturer?.has(Country.china));
        this.eu.checked = Boolean(filters.manufacturer?.has(Country.eu));
        this.orbital.checked = Boolean(filters.type?.has(SpaceflightTypes.orbital));
        this.interplanetary.checked = Boolean(filters.type?.has(SpaceflightTypes.interplanetary));
        this.interstellar.checked = Boolean(filters.type?.has(SpaceflightTypes.interstellar));
        this.soft.checked = Boolean(filters.landing?.has(LandingType.soft));
        this.crash.checked = Boolean(filters.landing?.has(LandingType.crash));
        this.none.checked = Boolean(filters.landing?.has(LandingType.none));
        this.flight.checked = Boolean(filters.inFlight);
    }
}

export default Filters;