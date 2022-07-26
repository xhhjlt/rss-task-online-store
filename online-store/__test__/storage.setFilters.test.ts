/**
 * @jest-environment jsdom
 */

import { Country, LandingType, SpaceflightTypes } from '../src/components/model/data/ISpaceshipData';
import ISpaceshipFilters from '../src/components/model/data/ISpaceshipFilters';
import spaceshipSortOptions from '../src/components/model/data/spaceshipSortOptions';
import DataStorage from '../src/components/model/storage/storage';

const storage = new DataStorage();
const filters: ISpaceshipFilters = {
    crewMax: 2,
    crewMin: 1,
    inFlight: false,
    landing: [LandingType.soft],
    launchYearMax: 2015,
    launchYearMin: 1964,
    manufacturer: [ Country.china, Country.usa],
    search: '',
    type: [SpaceflightTypes.interplanetary],
    sort: spaceshipSortOptions.nameForward
};

test('storage.setFilters(filters) should set storage.currentfilters equal to filters', () => {
    storage.setFilters(filters);
    expect(storage.currentfilters).toEqual(filters);
});

test('storage.setFilters(filters) should add all filters to local storage', () => {
    storage.setFilters(filters);
    const currentfilters: ISpaceshipFilters = JSON.parse(localStorage.getItem('filters') || '{}');
    
    expect(currentfilters).toEqual(filters);
});