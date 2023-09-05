/**
 * Create an iterable object that contains the value from
 * the given function; iteration is done when the function
 * returns specific stop value.
 */
export const fn2iter = <T, U, TNext>(
    fn: ((...args: ([] | [TNext])) => (T | U)),
    stopValue: U,
): Iterable<T> => ({
    [Symbol.iterator](): Iterator<T, undefined, any> {
        return {
            next(...args: ([] | [TNext])) {
                const value = fn(...args);
                return (
                    (value === stopValue)
                        ? { done: true, value: undefined } as const
                        : { value: value as T }
                );
            }
        } satisfies Iterator<T, undefined, TNext>;
    }
});
