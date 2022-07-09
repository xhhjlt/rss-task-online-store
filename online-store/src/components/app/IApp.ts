import Controller from "../controller/controller";
import View from "../view/view";

interface IApp {
    controller: Controller;
    view: View;
    start: () => void;
}

export default IApp;