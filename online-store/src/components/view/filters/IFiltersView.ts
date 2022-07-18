import ISpaceshipFilters from "../../model/data/ISpaceshipFilters";

interface IFiltersView {
    getFilters: () => ISpaceshipFilters;
    drawFilters: (filters: ISpaceshipFilters) => void;
}

export default IFiltersView;