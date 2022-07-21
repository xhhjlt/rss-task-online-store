/**
 * @jest-environment jsdom
 */

import { Country, LandingType, SpaceflightTypes } from "../src/components/model/data/ISpaceshipData";
import ISpaceshipFilters from "../src/components/model/data/ISpaceshipFilters";
import spaceshipSortOptions from "../src/components/model/data/spaceshipSortOptions";
import DataStorage from "../src/components/model/storage/storage";

const storage = new DataStorage();
const filters: ISpaceshipFilters = {
        crewMax: 2,
        crewMin: 1,
        inFlight: false,
        landing: new Set([LandingType.soft]),
        launchYearMax: 2015,
        launchYearMin: 1964,
        manufacturer: new Set([ Country.china, Country.usa]),
        search: "",
        type: new Set([SpaceflightTypes.interplanetary]),
        sort: spaceshipSortOptions.nameForward
        };

test(`storage.setFilters(filters) should set storage.currentfilters equal to filters`, () => {
    storage.setFilters(filters);
    expect(storage.currentfilters).toEqual(filters);
})

test(`storage.setFilters(filters) should add all filters to local storage`, () => {
    storage.setFilters(filters);
    const currentfilters: ISpaceshipFilters = {};
    currentfilters.inFlight = Boolean(localStorage.getItem("inFlight"));
    currentfilters.search = localStorage.getItem("search") || "";
        switch (localStorage.getItem("sort")) {
            case "1":
                currentfilters.sort = spaceshipSortOptions.nameForward
                break;
            case "2":
                currentfilters.sort = spaceshipSortOptions.nameBackward
                break;
            case "3":
                currentfilters.sort = spaceshipSortOptions.yearForward
                break;
            case "4":
                currentfilters.sort = spaceshipSortOptions.yearBackward
                break;
            case "5":
                currentfilters.sort = spaceshipSortOptions.crewForward
                break;
            case "6":
                currentfilters.sort = spaceshipSortOptions.crewBackward
                break;
            default:
                break;
        }
        currentfilters.crewMin = Number(localStorage.getItem("crewMin")) || 0;
        currentfilters.crewMax = Number(localStorage.getItem("crewMax")) || 3;
        currentfilters.launchYearMin = Number(localStorage.getItem("launchYearMin")) || 1950;
        currentfilters.launchYearMax = Number(localStorage.getItem("launchYearMax")) || 2022;
        currentfilters.manufacturer = new Set<Country>;
        if (localStorage.getItem("СССР") === "true") currentfilters.manufacturer.add(Country.ussr);
        if (localStorage.getItem("США") === "true") currentfilters.manufacturer.add(Country.usa);
        if (localStorage.getItem("КНР") === "true") currentfilters.manufacturer.add(Country.china);
        if (localStorage.getItem("ЕС") === "true")  currentfilters.manufacturer.add(Country.eu);
        currentfilters.landing = new Set<LandingType>;
        if (localStorage.getItem("мягкая") === "true")  currentfilters.landing.add(LandingType.soft);
        if (localStorage.getItem("жесткая") === "true")  currentfilters.landing.add(LandingType.crash);
        if (localStorage.getItem("нет") === "true")  currentfilters.landing.add(LandingType.none);
        currentfilters.type = new Set<SpaceflightTypes>;
        if (localStorage.getItem("орбитальный") === "true")  currentfilters.type.add(SpaceflightTypes.orbital);
        if (localStorage.getItem("межпланетный") === "true")  currentfilters.type.add(SpaceflightTypes.interplanetary);
        if (localStorage.getItem("межзвездный") === "true")  currentfilters.type.add(SpaceflightTypes.interstellar);
    expect(currentfilters).toEqual(filters);
})