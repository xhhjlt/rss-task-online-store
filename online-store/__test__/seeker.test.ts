import Seeker from "../src/components/model/seeker/seeker"

const ships = require("./mocks/correct.json").spacecrafts;

test('return empty array if nothing to find', () => {
    let seeker = new Seeker();
    expect(seeker.search([], "pepelac")).toEqual([]);
})

test('return empty array if do not find anything', () => {
    let seeker = new Seeker();
    expect(seeker.search(ships, "pepelac")).toEqual([]);
})

test('finds spacecraft by substring in name', () => {
    let seeker = new Seeker();
    expect(seeker.search(ships, "марс")).toEqual([]);
})