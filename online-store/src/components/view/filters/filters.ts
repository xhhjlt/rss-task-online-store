import { Country, LandingType, SpaceflightTypes } from '../../model/data/ISpaceshipData';
import ISpaceshipFilters from '../../model/data/ISpaceshipFilters';
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

        this.crewLabel = document.querySelector('.crew-label') as HTMLElement;
        this.yearLabel = document.querySelector('.year-label') as HTMLElement;
        this.yearSlider = this.createYearSlider();
        this.crewSlider = this.createCrewSlider();

        this.flight = document.querySelector('#flight') as HTMLInputElement;

        this.search = document.querySelector('#search') as HTMLInputElement;

        this.sort = document.querySelector('#sort') as HTMLInputElement;
        
        this.resetFilters = document.querySelector('.reset-filters') as HTMLElement;
        this.resetAll = document.querySelector('.reset-all') as HTMLElement; 
    }

    getFilters(): ISpaceshipFilters {
        const result: ISpaceshipFilters = {};
        const crewRange: Array<number> = this.crewSlider.get(true) as Array<number>;
        const yearRange: Array<number> = this.yearSlider.get(true) as Array<number>;

        result.manufacturer = [Country.ussr, Country.usa, Country.china, Country.eu]
            .filter((_item, index) => 
                [this.ussr.checked, this.usa.checked, this.china.checked, this.eu.checked][index]);

        result.type = [SpaceflightTypes.orbital, SpaceflightTypes.interplanetary, SpaceflightTypes.interstellar]
            .filter((_item, index) => [this.orbital.checked, this.interplanetary.checked, this.interstellar.checked][index]);
        
        result.landing = [LandingType.soft, LandingType.crash, LandingType.none]
            .filter((_item, index) => [this.soft.checked, this.crash.checked, this.none.checked][index]);

        result.inFlight = this.flight?.checked;

        result.search = this.search.value;
        
        [result.crewMin, result.crewMax] = crewRange;
        [result.launchYearMin, result.launchYearMax] = yearRange;

        result.sort = +this.sort.value;

        return result;
    }

    drawFilters(filters: ISpaceshipFilters): void {
        this.ussr.checked = Boolean(filters.manufacturer?.includes(Country.ussr));
        this.usa.checked = Boolean(filters.manufacturer?.includes(Country.usa));
        this.china.checked = Boolean(filters.manufacturer?.includes(Country.china));
        this.eu.checked = Boolean(filters.manufacturer?.includes(Country.eu));

        this.orbital.checked = Boolean(filters.type?.includes(SpaceflightTypes.orbital));
        this.interplanetary.checked = Boolean(filters.type?.includes(SpaceflightTypes.interplanetary));
        this.interstellar.checked = Boolean(filters.type?.includes(SpaceflightTypes.interstellar));

        this.soft.checked = Boolean(filters.landing?.includes(LandingType.soft));
        this.crash.checked = Boolean(filters.landing?.includes(LandingType.crash));
        this.none.checked = Boolean(filters.landing?.includes(LandingType.none));

        this.flight.checked = Boolean(filters.inFlight);

        this.sort.value = filters.sort ? filters.sort.toString() : '1';

        this.search.value = filters.search || '';

        this.crewSlider.set([(filters.crewMin ? filters.crewMin : 0) , (filters.crewMax ? filters.crewMax : 3)]);
        this.yearSlider.set([(filters.launchYearMin ? filters.launchYearMin : 1950) , (filters.launchYearMax ? filters.launchYearMax : 2022)]);
    }

    private createCrewSlider() {
        const crew: HTMLElement = document.getElementById('crew') as HTMLElement;

        return noUiSlider.create(crew, {
            start: [0, 3],
            connect: true,
            range: {
                'min': 0,
                'max': 3
            },
            step: 1,
        });
    }

    private createYearSlider() {
        const year: HTMLElement = document.getElementById('year') as HTMLElement;

        return noUiSlider.create(year, {
            start: [1950, 2022],
            connect: true,
            range: {
                'min': 1950,
                'max': 2022
            },
            step: 1,
        });
        
    }
}

export default Filters;