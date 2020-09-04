/**
 * Create an iterable object that yields pairs of values from
 * the given two iterable objects (stops when the shorter one stops)
 * @example
 * ```js
 * [...Iter.zip([0, 1, 2], 'abc')]
 * // -> [[0, 'a'], [1, 'b'], [2, 'c']]
 * ```
 */
export const zip = <T, U>(
    a: Iterable<T>,
    b: Iterable<U>,
) => new Zip(a, b);
/** dts2md break */
export class Zip<T, U> implements Iterable<readonly [T, U]> {

    constructor(
        readonly a: Iterable<T>,
        readonly b: Iterable<U>,
    ) { }

    [Symbol.iterator](): Iterator<readonly [T, U]> {
        const { a, b } = this;
        const aIterator = a[Symbol.iterator]();
        const bIterator = b[Symbol.iterator]();
        return {
            next() {
                const currentA = aIterator.next();
                if (currentA.done) {
                    return { done: true, value: undefined } as const;
                }
                const currentB = bIterator.next();
                if (currentB.done) {
                    return { done: true, value: undefined } as const;
                }
                return { value: [currentA.value, currentB.value] as const };
            }
        };
    }

}
