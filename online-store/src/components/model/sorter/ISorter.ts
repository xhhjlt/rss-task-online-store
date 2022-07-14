import { EnumType } from "typescript";

interface ISorter<T> {
    currentSort: EnumType;
    useOn: (data: Array<T>) => Array<T>;
}

export default ISorter;