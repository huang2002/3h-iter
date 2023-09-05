// TODO: more than two input iterables
/**
 * Create an iterable object that yields pairs of values from
 * the given iterable objects and stops when the longest one stops.
 * @example
 * ```js
 * [...Iter.zipLongest([0, 1, 2], 'ab', '-')]
 * // -> [[0, 'a'], [1, 'b'], [2, '-']]
 * ```
 */
export const zipLongest = <T>(
    iterableA: Iterable<T>,
    iterableB: Iterable<T>,
    fillValue: T,
) => (
    new ZipLongest(iterableA, iterableB, fillValue)
);
/** dts2md break */
/**
 * An iterable object that yields pairs of values from
 * the given iterable objects and stops when the longest one stops.
 */
export class ZipLongest<T> implements Iterable<readonly [T, T]> {
    /**
     * Constructor of {@link ZipLongest}.
     */
    constructor(
        iterableA: Iterable<T>,
        iterableB: Iterable<T>,
        fillValue: T,
    ) {
        this.iterableA = iterableA;
        this.iterableB = iterableB;
        this.fillValue = fillValue;
    }
    /**
     * First iterable.
     */
    readonly iterableA: Iterable<T>;
    /**
     * Second iterable.
     */
    readonly iterableB: Iterable<T>;
    /**
     * The value that is used as placeholders
     * for early-stopped iterables.
     */
    readonly fillValue: T;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<readonly [T, T]> {
        const { iterableA, iterableB, fillValue } = this;
        const iteratorA = iterableA[Symbol.iterator]();
        const iteratorB = iterableB[Symbol.iterator]();
        return {
            next() {
                const currentA = iteratorA.next();
                const currentB = iteratorB.next();
                if (currentA.done) {
                    if (currentB.done) {
                        return { done: true, value: undefined } as const;
                    } else {
                        return { value: [fillValue, currentB.value] as const };
                    }
                } else {
                    if (currentB.done) {
                        return { value: [currentA.value, fillValue] as const };
                    } else {
                        return { value: [currentA.value, currentB.value] as const };
                    }
                }
            }
        };
    }

}
