/**
 * Similar to `zip`, but continues yield value pairs after
 * the shorter iterable object stops and uses `fillValue`
 * as placeholders
 * @example
 * ```js
 * [...Iter.zipLongest([0, 1, 2], 'ab', '-')]
 * // -> [[0, 'a'], [1, 'b'], [2, '-']]
 * ```
 */
export const zipLongest = <T>(
    a: Iterable<T>,
    b: Iterable<T>,
    fillValue: T,
) => new ZipLongest(a, b, fillValue);
/** dts2md break */
export class ZipLongest<T> implements Iterable<readonly [T, T]> {

    constructor(
        readonly a: Iterable<T>,
        readonly b: Iterable<T>,
        readonly fillValue: T,
    ) { }

    [Symbol.iterator](): Iterator<readonly [T, T]> {
        const { a, b, fillValue } = this;
        const aIterator = a[Symbol.iterator]();
        const bIterator = b[Symbol.iterator]();
        return {
            next() {
                const currentA = aIterator.next();
                const currentB = bIterator.next();
                if (currentA.done) {
                    if (currentB.done) {
                        return { done: true, value: undefined } as const;
                    } else {
                        return { value: [fillValue, currentB.value] as const };
                    }
                } else {
                    if (currentB.done) {
                        return { value: [currentA.value, fillValue] as const };
                    } else {
                        return { value: [currentA.value, currentB.value] as const };
                    }
                }
            }
        };
    }

}
