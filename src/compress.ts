/**
 * Get a new iterable object that filters the given data
 * according to the selectors.
 * @example
 * ```js
 * [...Iter.compress([0, 1, 2], [true, false, true])]
 * // -> [0, 2]
 * ```
 */
export const compress = <T>(
    data: Iterable<T>,
    selectors: Iterable<boolean>,
) => (
    new Compress(data, selectors)
);
/** dts2md break */
/**
 * An iterable object that filters the given data
 * according to the selectors.
 */
export class Compress<T> implements Iterable<T> {
    /**
     * Constructor of {@link Compress}.
     */
    constructor(
        data: Iterable<T>,
        selectors: Iterable<boolean>,
    ) {
        this.data = data;
        this.selectors = selectors;
    }
    /**
     * Original iterable.
     */
    readonly data: Iterable<T>;
    /**
     * Selector iterable.
     */
    readonly selectors: Iterable<boolean>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T, undefined, undefined> {
        const { data, selectors } = this;
        const dataIterator = data[Symbol.iterator]();
        const selectorIterator = selectors[Symbol.iterator]();
        return {
            next() {
                let currentData = dataIterator.next();
                if (currentData.done) {
                    return { done: true, value: undefined } as const;
                }
                let currentSelector = selectorIterator.next();
                if (currentSelector.value) {
                    return { value: currentData.value };
                }
                while (!currentSelector.done && !currentData.done) {
                    currentData = dataIterator.next();
                    currentSelector = selectorIterator.next();
                    if (currentSelector.value) {
                        return { value: currentData.value };
                    }
                }
                return { done: true, value: undefined } as const;
            }
        };
    }

}
