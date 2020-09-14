/**
 * Create a new iterable object that repeats
 * the given one specific times
 */
export const repeat = <T>(
    iterable: Iterable<T>,
    count: number
) => new Repeat(iterable, count);
/** dts2md break */
export class Repeat<T> implements Iterable<T> {

    constructor(
        readonly iterable: Iterable<T>,
        readonly count: number,
    ) { }

    [Symbol.iterator](): Iterator<T> {
        const { count, iterable } = this;
        let iterator = iterable[Symbol.iterator]();
        let current = 0;
        return {
            next() {
                if (current >= count) {
                    return { done: true, value: undefined };
                }
                const result = iterator.next();
                if (result.done) {
                    if (++current === count) {
                        return { done: true, value: undefined };
                    } else {
                        iterator = iterable[Symbol.iterator]();
                        return iterator.next();
                    }
                } else {
                    return result;
                }
            }
        };
    }

}
