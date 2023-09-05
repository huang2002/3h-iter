/**
 * Similar to `Array.prototype.slice`,
 * but operates on iterable objects.
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
) => (
    new Slice(iterable, start, stop)
);
/** dts2md break */
/**
 * An iterable object that slices the given one.
 */
export class Slice<T> implements Iterable<T> {
    /**
     * Constructor of {@link Slice}. \
     * Default start: `0`. \
     * Default stop: `Infinity`.
     */
    constructor(
        iterable: Iterable<T>,
        start = 0,
        stop = Infinity,
    ) {
        if ((stop < 0) || (stop !== stop)) {
            throw new RangeError('invalid stop');
        }
        this.iterable = iterable;
        this.start = start;
        this.stop = stop;
    }
    /**
     * Original iterable.
     */
    readonly iterable: Iterable<T>;
    /**
     * Start index.
     */
    readonly start: number;
    /**
     * End index.
     */
    readonly stop: number;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T, undefined, undefined> {
        const { start, stop } = this;
        const iterator = this.iterable[Symbol.iterator]();
        let index = 0;
        return {
            next() {
                if ((index >= stop) || (start >= stop)) {
                    return { done: true, value: undefined } as const;
                }
                let result = iterator.next();
                index++;
                while (!result.done && (index <= start)) {
                    result = iterator.next();
                    index++;
                }
                return result;
            }
        };
    }

}
