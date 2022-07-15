import spaceshipSortOptions from "../src/components/model/data/spaceshipSortOptions";
import Sorter from "../src/components/model/sorter/sorter"

let ships = require("./mocks/sorter/correct.json").spacecrafts;

test('return empty array if nothing to sort', () => {
    const sorter = new Sorter();
    expect(sorter.useOn([])).toEqual([]);
})

test('return same array if sort option is none', () => {
    const sorter = new Sorter();
    sorter.currentSort = spaceshipSortOptions.none;
    expect(sorter.useOn(ships)).toEqual(ships);
})

