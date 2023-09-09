/**
 * Count items from the given iterable.
 */
export const count = (iterable: Iterable<unknown>): number => {
    let result = 0;
    for (const _ of iterable) {
        result += 1;
    }
    return result;
};
