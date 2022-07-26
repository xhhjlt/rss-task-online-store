import Model from '../model/model';
import View from '../view/view';

interface IController {
    model: Model;
    view: View;
    //filtersChangeHandler: () => void;
    //changeProductsHandler: () => void;
}

export default IController;