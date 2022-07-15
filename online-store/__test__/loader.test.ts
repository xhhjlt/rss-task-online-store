import Loader from "../src/components/model/data/loader";
const path = require('path');

test("return data on correct input", () => {
    const load = new Loader(path.resolve(__dirname, "mocks/loader/correct.json"))
    expect(load.loadData()).toEqual(require("./mocks/loader/correctReturn.json").spacecrafts)
});