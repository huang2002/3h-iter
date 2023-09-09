/**
 * Get a new iterable that yields tuples of
 * indices and values from the given one.
 * @example
 * ```js
 * [...Iter.enumerate('ABC')]
 * // -> [[0, 'A'], [1, 'B'], [2, 'C']]
 * ```
 */
export const enumerate = <T>(
    iterable: Iterable<T>,
) => (
    new Enumerate(iterable)
);
/** dts2md break */
/**
 * Type of result tuples from {@link Enumerate}.
 */
export type EnumerateItem<T> = [index: number, value: T];
/** dts2md break */
/**
 * An iterable that yields tuples of
 * indices and values from the given one.
 */
export class Enumerate<T> implements Iterable<EnumerateItem<T>> {
    /**
     * Constructor of {@link Enumerate}.
     */
    constructor(iterable: Iterable<T>) {
        this.iterable = iterable;
    }
    /**
     * Original iterable.
     */
    readonly iterable: Iterable<T>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<EnumerateItem<T>, undefined, undefined> {
        const iterator = this.iterable[Symbol.iterator]();
        let index = 0;
        return {
            next() {
                const current = iterator.next();
                if (current.done) {
                    return { done: true, value: undefined };
                } else {
                    return { value: [index++, current.value] };
                }
            },
        };
    }

}
