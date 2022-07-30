import ILoader from './ILoader';
import ISpaceshipData from './ISpaceshipData';

class Loader implements ILoader<ISpaceshipData> {

    getData(): Array<ISpaceshipData> {
        let data: { spacecrafts: Array<ISpaceshipData> };

        try {
            data = require('../../../public/warehouse.json');
        } catch (e) {
            console.error('Error: Don\'t have access to file or file not exist');
            return [];
        }

        if (data?.spacecrafts && Array.isArray(data?.spacecrafts)) {
            return data.spacecrafts;
        } else {
            console.error('Error: Wrong file format');
            return [];
        }
    }
}

export default Loader;