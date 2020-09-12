/**
 * Create an iterable object that contains the value from
 * the given function; iteration is done when the function
 * returns specific stop value
 */
export const fn2iter = <T, U>(fn: () => T | U, stopValue: U): Iterable<T> => ({
    [Symbol.iterator]() {
        return {
            next() {
                const value = fn();
                return (
                    value === stopValue
                        ? { done: true, value: undefined } as const
                        : { value: value as T }
                );
            }
        };
    }
});
