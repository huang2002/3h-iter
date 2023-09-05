/**
 * Type of filter predictors.
 */
export type FilterPredictor<T> = (value: T, index: number) => boolean;
/** dts2md break */
/**
 * Get a new iterable object that filters the given one
 * according to corresponding return values of the predictor.
 * @example
 * ```js
 * [...Iter.filter([0, 1, 2], (x) => (x > 0))]
 * // -> [1, 2]
 * ```
 */
export const filter = <T>(
    iterable: Iterable<T>,
    predictor: FilterPredictor<T>,
) => (
    new Filter(iterable, predictor)
);
/** dts2md break */
/**
 * An iterable object that filters the given one
 * according to corresponding return values of the predictor.
 */
export class Filter<T> implements Iterable<T> {
    /**
     * Constructor of {@link Filter}.
     */
    constructor(
        iterable: Iterable<T>,
        predictor: FilterPredictor<T>,
    ) {
        this.iterable = iterable;
        this.predictor = predictor;
    }
    /**
     * Original iterable.
     */
    readonly iterable: Iterable<T>;
    /**
     * Predictor.
     */
    readonly predictor: FilterPredictor<T>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T, undefined, undefined> {
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
