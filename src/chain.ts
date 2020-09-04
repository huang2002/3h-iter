/**
 * Create a new iterable object that concats the given ones
 * @example
 * ```js
 * [...Iter.chain([0, 1], [2, 3])]
 * // -> [0, 1, 2, 3]
 * ```
 */
export const chain = <T>(...iterables: Iterable<T>[]) => new Chain(...iterables);
/** dts2md break */
export class Chain<T> implements Iterable<T> {

    constructor(...iterables: Iterable<T>[]) {
        this.iterables = iterables;
    }

    readonly iterables: Iterable<T>[];

    [Symbol.iterator](): Iterator<T> {
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
