interface ILoader<T> {
    getData: () => Array<T>;
}

export default ILoader;