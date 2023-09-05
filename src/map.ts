/**
 * Type of map functions.
 */
export type Mapper<T, U> = (data: T, index: number) => U;
/** dts2md break */
/**
 * Create a new iterable object that maps the given one
 * using provided map function.
 * @example
 * ```js
 * [...Iter.map([0, 1, 2], (x) => (x * 2))]
 * // -> [0, 2, 4]
 * ```
 */
export const map = <T, U>(
    iterable: Iterable<T>,
    mapper: Mapper<T, U>,
) => new Map(iterable, mapper);
/** dts2md break */
/**
 * An iterable object that maps the given one
 * using provided map function.
 */
export class Map<T, U> implements Iterable<U>{
    /**
     * Constructor of {@link Map}.
     */
    constructor(
        iterable: Iterable<T>,
        mapper: Mapper<T, U>,
    ) {
        this.iterable = iterable;
        this.mapper = mapper;
    }
    /**
     * Original iterable.
     */
    readonly iterable: Iterable<T>;
    /**
     * Map function.
     */
    readonly mapper: Mapper<T, U>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<U, undefined, undefined> {
        const { mapper } = this;
        const iterator = this.iterable[Symbol.iterator]();
        let index = 0;
        return {
            next() {
                const data = iterator.next();
                if (data.done) {
                    return data;
                } else {
                    return { value: mapper(data.value, index++) };
                }
            }
        };
    }

}
