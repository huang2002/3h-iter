// TODO: accept arguments for next()
/**
 * Create a function that returns value from the given iterable object
 * each time the function is invoked; when iteration is done, it returns
 * specific stop value instead.
 */
export const iter2fn = <T, U>(iterable: Iterable<T>, stopValue: U): (() => (T | U)) => {
    const iterator = iterable[Symbol.iterator]();
    return () => {
        const result = iterator.next();
        return result.done ? stopValue : result.value;
    };
};
