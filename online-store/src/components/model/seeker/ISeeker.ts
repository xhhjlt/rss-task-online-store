interface ISeeker<T> {
    search: (data: Array<T>, keyword: string, options? : Record<string, boolean>) => Array<T>;
}

export default ISeeker;