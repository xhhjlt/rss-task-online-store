import IFilterKeys from "./IFilterKeys";

interface IFilter<T> {
    currentFilters: IFilterKeys<T>;
    useOn: (data: Array<T>) => Array<T>;
}

export default IFilter;