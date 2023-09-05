/**
 * Create a function that returns value from the given iterable object
 * each time the function is invoked; when iteration is done, it returns
 * specific stop value instead.
 */
export const iter2fn = <T, U, TNext = unknown>(
    iterable: Iterable<T>,
    stopValue: U,
): ((...args: ([] | [TNext])) => (T | U)) => {
    const iterator = iterable[Symbol.iterator]() as Iterator<T, undefined, TNext>;
    return (...args) => {
        const result = iterator.next(...args);
        return result.done ? stopValue : result.value;
    };
};
