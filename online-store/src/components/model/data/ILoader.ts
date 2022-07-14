interface ILoader<T> {
    loadData: () => Array<T>;
}

export default ILoader;