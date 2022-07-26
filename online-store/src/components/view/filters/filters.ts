import { Country, LandingType, SpaceflightTypes } from '../../model/data/ISpaceshipData';
import ISpaceshipFilters from '../../model/data/ISpaceshipFilters';
import spaceshipSortOptions from '../../model/data/spaceshipSortOptions';
import IFiltersView from './IFiltersView';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

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
    search: HTMLInputElement;
    sort: HTMLInputElement;
    crewSlider: noUiSlider.API;
    yearSlider: noUiSlider.API;
    crewLabel: HTMLElement;
    yearLabel: HTMLElement;
    resetFilters: HTMLElement;
    resetAll: HTMLElement;

    constructor() {
        this.conteiner = document.querySelector('.filters-conteiner') as HTMLElement;
        this.ussr = document.querySelector('#ussr') as HTMLInputElement;
        this.usa = document.querySelector('#usa') as HTMLInputElement;
        this.china = document.querySelector('#china') as HTMLInputElement;
        this.eu = document.querySelector('#eu') as HTMLInputElement;
        this.orbital = document.querySelector('#orbital') as HTMLInputElement;
        this.interplanetary = document.querySelector('#interplanetary') as HTMLInputElement;
        this.interstellar = document.querySelector('#interstellar') as HTMLInputElement;
        this.soft = document.querySelector('#soft') as HTMLInputElement;
        this.crash = document.querySelector('#crash') as HTMLInputElement;
        this.none = document.querySelector('#none') as HTMLInputElement;
        const year: HTMLElement = document.getElementById('year') as HTMLElement;
        const crew: HTMLElement = document.getElementById('crew') as HTMLElement;
        this.crewLabel = document.querySelector('.crew-label') as HTMLElement;
        this.yearLabel = document.querySelector('.year-label') as HTMLElement;
        this.yearSlider = noUiSlider.create(year, {
            start: [1950, 2022],
            connect: true,
            range: {
                'min': 1950,
                'max': 2022
            },
            step: 1,
        });
        this.crewSlider = noUiSlider.create(crew, {
            start: [0, 3],
            connect: true,
            range: {
                'min': 0,
                'max': 3
            },
            step: 1,
        });
        this.flight = document.querySelector('#flight') as HTMLInputElement;
        this.search = document.querySelector('#search') as HTMLInputElement;
        this.sort = document.querySelector('#sort') as HTMLInputElement;
        this.resetFilters = document.querySelector('.reset-filters') as HTMLElement;
        this.resetAll = document.querySelector('.reset-all') as HTMLElement; 
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
        result.search = this.search.value;
        const crewRange: Array<number> = this.crewSlider.get(true) as Array<number>;
        [result.crewMin, result.crewMax] = crewRange;
        const yearRange: Array<number> = this.yearSlider.get(true) as Array<number>;
        [result.launchYearMin, result.launchYearMax] = yearRange;
        switch (this.sort.value) {
        case '1':
            result.sort = spaceshipSortOptions.nameForward;
            break;
        case '2':
            result.sort = spaceshipSortOptions.nameBackward;
            break;
        case '3':
            result.sort = spaceshipSortOptions.yearForward;
            break;
        case '4':
            result.sort = spaceshipSortOptions.yearBackward;
            break;
        case '5':
            result.sort = spaceshipSortOptions.crewForward;
            break;
        case '6':
            result.sort = spaceshipSortOptions.crewBackward;
            break;
        default:
            result.sort = spaceshipSortOptions.nameForward;
            break;
        }

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
        this.sort.value = filters.sort ? filters.sort.toString() : '1';
        this.search.value = filters.search || '';
        this.crewSlider.set([(filters.crewMin ? filters.crewMin : 0) , (filters.crewMax ? filters.crewMax : 3)]);
        this.yearSlider.set([(filters.launchYearMin ? filters.launchYearMin : 1950) , (filters.launchYearMax ? filters.launchYearMax : 2022)]);
    }
}

export default Filters;