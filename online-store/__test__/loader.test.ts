import Loader from "../src/components/model/data/loader";
const path = require('path');

test("return data on correct input", () => {
    const load = new Loader(path.resolve(__dirname, "mocks/correct.json"));
    expect(load.loadData()).toEqual(require("./mocks/loader/correctReturn.json").spacecrafts);
});

test("return data on unexpected capitals and spaces", () => {
    const load = new Loader(path.resolve(__dirname, "mocks/loader/unexpUp.json"));
    expect(load.loadData()).toEqual(require("./mocks/loader/unexpUpReturn.json").spacecrafts);
});

test("return empty array if file not exist", () => {
    const load = new Loader(path.resolve(__dirname, "mocks/loader/notExist.json"));
    expect(load.loadData()).toEqual([]);
});

test("return empty array if data don't have required field", () => {
    const load = new Loader(path.resolve(__dirname, "mocks/loader/wrongFormat.json"));
    expect(load.loadData()).toEqual([]);
});