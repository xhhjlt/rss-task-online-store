import IProductData from "../model/data/IProductData";
import IModel from "../model/IModel";
import IView from "../view/IView";

interface IController {
    model: IModel<IProductData>;
    view: IView;
    filtersChangeHandler: () => void;
    changeProductsHandler: () => void;
}

export default IController;