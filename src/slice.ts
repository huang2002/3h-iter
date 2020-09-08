/**
 * Similar to `Array.prototype.slice`,
 * but operates on iterable objects
 * @example
 * ```js
 * const range = Iter.range(0, 10)
 * [...Iter.slice(range, 1, 4)]
 * // -> [1, 2, 3]
 * ```
 */
export const slice = <T>(
    iterable: Iterable<T>,
    start = 0,
    stop = Infinity,
) => new Slice(iterable, start, stop);
/** dts2md break */
export class Slice<T> implements Iterable<T> {

    constructor(
        readonly iterable: Iterable<T>,
        readonly start = 0,
        readonly stop = Infinity,
    ) {
        if (!(stop >= 0)) {
            throw new RangeError('invalid stop');
        }
    }

    [Symbol.iterator](): Iterator<T> {
        const { start, stop } = this;
        const iterator = this.iterable[Symbol.iterator]();
        let index = 0;
        return {
            next() {
                if (index >= stop || start >= stop) {
                    return { done: true, value: undefined } as const;
                }
                let result = iterator.next();
                index++;
                while (!result.done && index <= start) {
                    result = iterator.next();
                    index++;
                }
                return result;
            }
        };
    }

}
