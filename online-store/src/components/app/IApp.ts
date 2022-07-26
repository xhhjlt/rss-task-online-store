import IController from '../controller/IController';

interface IApp {
    controller: IController;
    start: () => void;
}

export default IApp;