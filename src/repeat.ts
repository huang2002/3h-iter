/**
 * Create a new iterable object that repeats
 * the given one specific times.
 */
export const repeat = <T>(
    iterable: Iterable<T>,
    count: number,
) => (
    new Repeat(iterable, count)
);
/** dts2md break */
/**
 * An iterable object that repeats
 * the given one specific times.
 */
export class Repeat<T> implements Iterable<T> {
    /**
     * Constructor of {@link Repeat}.
     */
    constructor(
        iterable: Iterable<T>,
        count: number,
    ) {
        this.iterable = iterable;
        this.count = count;
    }
    /**
     * Original iterable.
     */
    readonly iterable: Iterable<T>;
    /**
     * Repeat count.
     */
    readonly count: number;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T, undefined, undefined> {
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
                    current += 1;
                    if (current === count) {
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
