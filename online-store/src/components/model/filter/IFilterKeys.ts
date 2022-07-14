import { EnumType } from "typescript";

export type rangeFilter<T> = {
    dataField: keyof T;
    label: string;
    min: number;
    max: number;
}

export type choiceFilter<T> = {
    dataField: keyof T;
    label: string;
    choices: Array<EnumType>
}


interface IFilterKeys<T> {
    range: Array<rangeFilter<T>>;
    choice: Array<choiceFilter<T>>;
}

export default IFilterKeys;