import spaceshipSortOptions from "../src/components/model/data/spaceshipSortOptions";
import Sorter from "../src/components/model/sorter/sorter"

const ships = require("./mocks/correct.json").spacecrafts;
const sorter = new Sorter();

test('Should return empty array if nothing to sort', () => {
    expect(sorter.useOn([])).toEqual([]);
});

test('Should return same array if sort option is none', () => {
    sorter.currentSort = spaceshipSortOptions.none;
    expect(sorter.useOn(ships)).toEqual(ships);
});

test('Should return sorted by name array if sort option is nameForward', () => {
    sorter.currentSort = spaceshipSortOptions.nameForward;
    const sorted = require("./mocks/sorter/sortedByName.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
});

test('Should return backward sorted by name array if sort option is nameBackward', () => {
    sorter.currentSort = spaceshipSortOptions.nameBackward;
    const sorted = require("./mocks/sorter/sortedByNameBack.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
})

test('Should return sorted by name array if sort option is yearForward', () => {
    sorter.currentSort = spaceshipSortOptions.yearForward;
    const sorted = require("./mocks/sorter/sortedByYear.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
})

test('Should return sorted by name array if sort option is yearBackward', () => {
    sorter.currentSort = spaceshipSortOptions.yearBackward;
    const sorted = require("./mocks/sorter/sortedByYearBack.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
})

test('Should return sorted by name array if sort option is crewForward', () => {
    sorter.currentSort = spaceshipSortOptions.crewForward;
    const sorted = require("./mocks/sorter/sortedByCrew.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
})

test('Should return sorted by name array if sort option is crewBackward', () => {
    sorter.currentSort = spaceshipSortOptions.crewBackward;
    const sorted = require("./mocks/sorter/sortedByCrewBack.json").spacecrafts;
    expect(sorter.useOn(ships)).toEqual(sorted);
})

