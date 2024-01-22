/**
 * Type of predictors in {@link some}.
 */
export type SomePredictor<T> = (value: T, index: number) => boolean;
/** dts2md break */
/**
 * Returns `true` when `predictor` returns `true`
 * for any value from the given iterable; returns `false` otherwise.
 */
export const some = <T>(
    iterable: Iterable<T>,
    predictor: SomePredictor<T>,
): boolean => {
    let index = 0;
    for (const value of iterable) {
        if (predictor(value, index)) {
            return true;
        }
        index += 1;
    }
    return false;
};
