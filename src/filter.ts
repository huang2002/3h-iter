export type FilterPredictor<T> = (value: T, index: number) => boolean;
/** dts2md break */
/**
 * Get a new iterable object that filters the given one
 * according to corresponding return value of the predictor
 * @example
 * ```js
 * [...Iter.filter([0, 1, 2], x => x > 0)]
 * // -> [1, 2]
 * ```
 */
export const filter = <T>(
    iterable: Iterable<T>,
    predictor: FilterPredictor<T>
) => new Filter(iterable, predictor);
/** dts2md break */
export class Filter<T> implements Iterable<T> {
    /** dts2md break */
    constructor(
        readonly iterable: Iterable<T>,
        readonly predictor: FilterPredictor<T>,
    ) { }
    /** dts2md break */
    [Symbol.iterator](): Iterator<T> {
        const { predictor } = this;
        const iterator = this.iterable[Symbol.iterator]();
        let index = 0;
        return {
            next() {
                let result = iterator.next();
                while (!result.done && !predictor(result.value, index++)) {
                    result = iterator.next();
                }
                return result;
            }
        };
    }

}
