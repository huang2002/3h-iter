// TODO: more than two input iterables
/**
 * Create an iterable object that yields pairs of values from
 * the given iterable objects and stops when the shortest one stops.
 * @example
 * ```js
 * [...Iter.zip([0, 1, 2], 'abc')]
 * // -> [[0, 'a'], [1, 'b'], [2, 'c']]
 * ```
 */
export const zip = <T, U>(
    iterableA: Iterable<T>,
    iterableB: Iterable<U>,
) => (
    new Zip(iterableA, iterableB)
);
/** dts2md break */
/**
 * An iterable object that yields pairs of values from
 * the given iterable objects and stops when the shortest one stops.
 */
export class Zip<T, U> implements Iterable<readonly [T, U]> {
    /**
     * Constructor of {@link Zip}.
     */
    constructor(
        iterableA: Iterable<T>,
        iterableB: Iterable<U>,
    ) {
        this.iterableA = iterableA;
        this.iterableB = iterableB;
    }
    /**
     * First iterable.
     */
    readonly iterableA: Iterable<T>;
    /**
     * Second iterable.
     */
    readonly iterableB: Iterable<U>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<readonly [T, U]> {
        const { iterableA, iterableB } = this;
        const iteratorA = iterableA[Symbol.iterator]();
        const iteratorB = iterableB[Symbol.iterator]();
        return {
            next() {
                const currentA = iteratorA.next();
                if (currentA.done) {
                    return { done: true, value: undefined } as const;
                }
                const currentB = iteratorB.next();
                if (currentB.done) {
                    return { done: true, value: undefined } as const;
                }
                return { value: [currentA.value, currentB.value] as const };
            }
        };
    }

}
