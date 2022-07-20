import { Country, LandingType, SpaceflightTypes } from "../src/components/model/data/ISpaceshipData";
import Loader from "../src/components/model/data/loader";

const loader = new Loader();

test("loader.validate() should return data whith enum type for manufacturer, type and landing fields", () => {
    expect(loader.validate(JSON.parse(`[{
        "id": 10,
        "name": "Гюйгенс",
        "image": "Huygens.jpg",
        "description": "«Гюйгенс» успешно вошёл в атмосферу Титана и совершил посадку на его поверхность, первая (и на 2022 год единственная) в истории мягкая посадка, совершённая во Внешней Солнечной системе.",
        "quote": "Планировалось передать 700 фотографий, но из-за сбоя в компьютерной программе (предположительно, по причине ошибок при её разработке) половина изображений была утеряна. ",
        "manufacturer": "  Ес",
        "launchYear": 1997,
        "crew": 0,
        "type": "МежплаНетный  ",
        "landing": " мягкая ",
        "inFlight": false
    }]`))).toEqual([{
        id: 10,
        name: 'Гюйгенс',
        image: 'Huygens.jpg',
        description: '«Гюйгенс» успешно вошёл в атмосферу Титана и совершил посадку на его поверхность, первая (и на 2022 год единственная) в истории мягкая посадка, совершённая во Внешней Солнечной системе.',
        quote: 'Планировалось передать 700 фотографий, но из-за сбоя в компьютерной программе (предположительно, по причине ошибок при её разработке) половина изображений была утеряна. ',
        manufacturer: Country.eu,
        launchYear: 1997,
        crew: 0,
        type: SpaceflightTypes.interplanetary,
        landing: LandingType.soft,
        inFlight: false
      }])
})

