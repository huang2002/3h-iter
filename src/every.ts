/**
 * Type of predictors in {@link every}.
 */
export type EveryPredictor<T> = (value: T, index: number) => boolean;
/** dts2md break */
/**
 * Returns `true` when `predictor` returns `true`
 * for every value from the given iterable; returns `false` otherwise.
 */
export const every = <T>(
    iterable: Iterable<T>,
    predictor: EveryPredictor<T>,
): boolean => {
    let index = 0;
    for (const value of iterable) {
        if (!predictor(value, index)) {
            return false;
        }
        index += 1;
    }
    return true;
};
