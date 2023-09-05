/**
 * Create a new iterable object that concats the given ones.
 * @example
 * ```js
 * [...Iter.chain([0, 1], [2, 3])]
 * // -> [0, 1, 2, 3]
 * ```
 */
export const chain = <T>(...iterables: readonly Iterable<T>[]) => (
    new Chain(...iterables)
);
/** dts2md break */
/**
 * An iterable object that concats the given ones.
 */
export class Chain<T> implements Iterable<T> {
    /**
     * Constructor of {@link Chain}.
     */
    constructor(...iterables: readonly Iterable<T>[]) {
        this.iterables = iterables;
    }
    /**
     * Received iterables.
     */
    readonly iterables: readonly Iterable<T>[];
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T, undefined, undefined> {
        const candidates = this.iterables.slice();
        if (!candidates.length) { // nothing to iterate
            return {
                next() {
                    return { done: true, value: undefined } as const;
                }
            };
        } else {
            let currentIterator = candidates.shift()![Symbol.iterator]();
            let result;
            return {
                next() {
                    result = currentIterator.next();
                    while (result.done && candidates.length) {
                        currentIterator = candidates.shift()![Symbol.iterator]();
                        result = currentIterator.next();
                    }
                    return result;
                }
            };
        }
    }

}
