import { Country, LandingType } from "../src/components/model/data/ISpaceshipData";
import Filter from "../src/components/model/filter/filter"

const ships = require("./stabs/correct.json").spacecrafts;
const filter = new Filter();

test('filter.use() should return full array on empty filters', () => {
    expect(filter.use(ships, {})).toEqual(ships)
})

test('filter.use() should return empty array if no elements matches filters', () => {
    expect(filter.use(ships, {launchYearMax: 1900})).toEqual([])
})

test('filter.use() should return array with elements matches manufacturer', () => {
    const manufacturer = new Set<Country>([Country.eu]);
    expect(filter.use(ships, {manufacturer})).toEqual([{
        "id": 10,
        "name": "Гюйгенс",
        "image": "Huygens.jpg",
        "description": "«Гюйгенс» успешно вошёл в атмосферу Титана и совершил посадку на его поверхность, первая (и на 2022 год единственная) в истории мягкая посадка, совершённая во Внешней Солнечной системе.",
        "quote": "Планировалось передать 700 фотографий, но из-за сбоя в компьютерной программе (предположительно, по причине ошибок при её разработке) половина изображений была утеряна. ",
        "manufacturer": "ЕС",
        "launchYear": 1997,
        "crew": 0,
        "type": "межпланетный",
        "landing": "мягкая",
        "inFlight": false
    }])
})

test('filter.use() should return array with elements matches crew', () => {
    expect(filter.use(ships, {crewMin: 2, crewMax: 3})).toEqual([{
        "id": 2,
        "name": "Аполлон-11",
        "image": "Apollo-11.jpg",
        "description": "Американский пилотируемый космический корабль серии «Аполлон», в ходе полёта которого в период с 16 по 24 июля 1969 года жители Земли впервые в истории совершили посадку на поверхность другого небесного тела — Луны",
        "quote": "Это один маленький шаг для человека, но гигантский скачок для всего человечества. ",
        "manufacturer": "США",
        "launchYear": 1969,
        "crew": 3,
        "type": "орбитальный",
        "landing": "мягкая",
        "inFlight": false
    }])
})

test('filter.use() should return array with elements matches "search" substring in name', () => {
    const search = "ar";
    expect(filter.use(ships, {search})).toEqual([
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

test('filter.use() should return array with elements matches landing', () => {
    const landing = new Set<LandingType>([LandingType.crash, LandingType.none]);
    expect(filter.use(ships, {landing})).toEqual([
    {
        "id": 3,
        "name": "Вояджер-1",
        "image": "Voyager.jpg",
        "description": "«Вояджер-1» является самым быстрым из покидающих Солнечную систему космических зондов, а также наиболее удалённым от Земли объектом из созданных человеком.",
        "quote": "Мы направляем в космос это послание.",
        "manufacturer": "США",
        "launchYear": 1977,
        "crew": 0,
        "type": "межзвездный",
        "landing": "нет",
        "inFlight": true
    },
    {
        "id": 7,
        "name": "Галилео",
        "image": "Galileo.jpeg",
        "description": "Автоматический космический аппарат НАСА. Это был первый аппарат, вышедший на орбиту Юпитера, изучавший планету длительное время, а также сбросивший в её атмосферу спускаемый зонд.",
        "quote": "Послан в атмосферу Юпитера с целью избежать возможности занесения микроорганизмов с Земли на спутники Юпитера.",
        "manufacturer": "США",
        "launchYear": 1989,
        "crew": 0,
        "type": "межпланетный",
        "landing": "нет",
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
    },])
})