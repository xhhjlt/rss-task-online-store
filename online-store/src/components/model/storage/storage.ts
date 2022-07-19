import ILoader from "../data/ILoader";
import ISpaceshipData, { Country, LandingType, SpaceflightTypes } from "../data/ISpaceshipData";
import ISpaceshipFilters from "../data/ISpaceshipFilters";
import Loader from "../data/loader";
import spaceshipSortOptions from "../data/spaceshipSortOptions";
import IStorage from "./IStorage";

class DataStorage implements IStorage<ISpaceshipData, ISpaceshipFilters> {
    all: Array<ISpaceshipData>;
    currentfilters: ISpaceshipFilters;
    cart: Set<string>;
    loader: ILoader<ISpaceshipData>;

    constructor() {
        this.loader = new Loader();
        this.all = this.loader.getData();
        const arr: Array<string> = [];
        this.all.forEach((ship) => {
            if (localStorage.getItem(ship.id.toString()) === "true") arr.push(ship.id.toString())
        });
        this.cart = new Set<string>(arr);
        const filters:ISpaceshipFilters = {};
        filters.inFlight = Boolean(localStorage.getItem("inFlight"));
        filters.search = localStorage.getItem("search") || "";
        switch (localStorage.getItem("sort")) {
            case "1":
                filters.sort = spaceshipSortOptions.nameForward
                break;
            case "2":
                filters.sort = spaceshipSortOptions.nameBackward
                break;
            case "3":
                filters.sort = spaceshipSortOptions.yearForward
                break;
            case "4":
                filters.sort = spaceshipSortOptions.yearBackward
                break;
            case "5":
                filters.sort = spaceshipSortOptions.crewForward
                break;
            case "6":
                filters.sort = spaceshipSortOptions.crewBackward
                break;
            default:
                break;
        }
        filters.crewMin = Number(localStorage.getItem("crewMin")) || 0;
        filters.crewMax = Number(localStorage.getItem("crewMax")) || 3;
        filters.launchYearMin = Number(localStorage.getItem("launchYearMin")) || 1950;
        filters.launchYearMax = Number(localStorage.getItem("launchYearMax")) || 2022;
        filters.manufacturer = new Set<Country>;
        if (localStorage.getItem("СССР") === "true") filters.manufacturer.add(Country.ussr);
        if (localStorage.getItem("США") === "true") filters.manufacturer.add(Country.usa);
        if (localStorage.getItem("КНР") === "true") filters.manufacturer.add(Country.china);
        if (localStorage.getItem("ЕС") === "true")  filters.manufacturer.add(Country.eu);
        filters.landing = new Set<LandingType>;
        if (localStorage.getItem("мягкая") === "true")  filters.landing.add(LandingType.soft);
        if (localStorage.getItem("жесткая") === "true")  filters.landing.add(LandingType.crash);
        if (localStorage.getItem("нет") === "true")  filters.landing.add(LandingType.none);
        filters.type = new Set<SpaceflightTypes>;
        if (localStorage.getItem("орбитальный") === "true")  filters.type.add(SpaceflightTypes.orbital);
        if (localStorage.getItem("межпланетный") === "true")  filters.type.add(SpaceflightTypes.interplanetary);
        if (localStorage.getItem("межзвездный") === "true")  filters.type.add(SpaceflightTypes.interstellar);
        this.currentfilters = filters;
    }

    addToCart(ship: string): void {
        this.cart.add(ship);
        localStorage.setItem(`${ship}`, "true");
    }

    removeFromCart(ship: string): void {
        this.cart.delete(ship);
        localStorage.removeItem(`${ship}`);
    }

    cartClear(): void {
        this.cart.forEach((ship: string) =>{
        localStorage.removeItem(`${ship}`);
        })
        this.cart.clear();
    }

    getAmountInCart(): number {
        return this.cart.size;
    }

    getFilters(): ISpaceshipFilters {
        
        return this.currentfilters;
    }

    setFilters(filters: ISpaceshipFilters) {
        this.currentfilters = filters;
        localStorage.clear();
        this.cart.forEach((item: string) => {
            this.addToCart(item);
        })
        filters.manufacturer?.forEach((item: Country) => {
            localStorage.setItem(item, "true");
        });
        filters.landing?.forEach((item: LandingType) => {
            localStorage.setItem(item, "true");
        });
        filters.type?.forEach((item: SpaceflightTypes) => {
            localStorage.setItem(item, "true");
        });
        if (filters.sort) localStorage.setItem("sort", filters.sort.toString());
        if (filters.search) localStorage.setItem("search", filters.search);
        if (filters.inFlight) localStorage.setItem("inFlight", "true");
        if (filters.crewMin) localStorage.setItem("crewMin", filters.crewMin.toString());
        if (filters.crewMax) localStorage.setItem("crewMax", filters.crewMax.toString());
        if (filters.launchYearMin) localStorage.setItem("launchYearMin", filters.launchYearMin.toString());
        if (filters.launchYearMax) localStorage.setItem("launchYearMax", filters.launchYearMax.toString());

    }
}

export default DataStorage;