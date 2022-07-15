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
    expect(seeker.search(ships, "ar")).toEqual([
    {
        "id": 8,
        "name": "NEAR Shoemaker",
        "image": "Near_Shoemaker.jpeg",
        "description": "Автоматическая межпланетная станция NASA, отправленная к астероиду Эрос. Стал первым искусственным спутником астероида, и первым искусственным объектом, совершившим мягкую посадку на астероид.",
        "quote": "Ранее «NEAR spacecraft», получил сегодняшнее название в честь американского геолога Юджина Шумейкераю",
        "manufacturer": "США",
        "launchYear": 1996,
        "crew": 0,
        "type": "межпланетный",
        "landing": "мягкая",
        "inFlight": false
    },
    {
        "id": 9,
        "name": "DART",
        "image": "DART.png",
        "description": "Double Asteroid Redirection Test — испытания перенаправления двойного астероида) — первый в истории проект по изменению траектории астероидов и их перенаправлению.",
        "quote": "DART намеренно врежется во второй астероид системы Дидим на скорости примерно 6,6 км/с",
        "manufacturer": "США",
        "launchYear": 2021,
        "crew": 0,
        "type": "межпланетный",
        "landing": "жесткая",
        "inFlight": true
    }]);
})