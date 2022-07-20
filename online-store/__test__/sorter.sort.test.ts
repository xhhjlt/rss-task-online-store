import spaceshipSortOptions from "../src/components/model/data/spaceshipSortOptions";
import Sorter from "../src/components/model/sorter/sorter"

const ships = require("./stabs/correct.json").spacecrafts;
const sorter = new Sorter();

test('sorter.sort should return empty array if nothing to sort', () => {
    expect(sorter.sort([], {sort: spaceshipSortOptions.nameForward})).toEqual([]);
});

test('sorter.sort should return same array if sort option is none', () => {
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.none})).toEqual(ships);
});

test('sorter.sort should return sorted by name array if sort option is nameForward', () => {
    const sorted = require("./stabs/sorter/sortedByName.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.nameForward})).toEqual(sorted);
});

test('sorter.sort should return backward sorted by name array if sort option is nameBackward', () => {
    const sorted = require("./stabs/sorter/sortedByNameBack.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.nameBackward})).toEqual(sorted);
})

test('sorter.sort should return sorted by name array if sort option is yearForward', () => {
    const sorted = require("./stabs/sorter/sortedByYear.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.yearForward})).toEqual(sorted);
})

test('sorter.sort should return sorted by name array if sort option is yearBackward', () => {
    const sorted = require("./stabs/sorter/sortedByYearBack.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.yearBackward})).toEqual(sorted);
})

test('sorter.sort should return sorted by name array if sort option is crewForward', () => {
    const sorted = require("./stabs/sorter/sortedByCrew.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.crewForward})).toEqual(sorted);
})

test('sorter.sort should return sorted by name array if sort option is crewBackward', () => {
    const sorted = require("./stabs/sorter/sortedByCrewBack.json").spacecrafts;
    expect(sorter.sort(ships, {sort: spaceshipSortOptions.crewBackward})).toEqual(sorted);
})

