import { ToIterables } from './common';

/**
 * Create an iterable object that yields tuples of values from
 * the given iterable objects and stops when the shortest one stops.
 * @example
 * ```js
 * [...Iter.zip([0, 1, 2], 'abc')]
 * // -> [[0, 'a'], [1, 'b'], [2, 'c']]
 * ```
 */
export const zip = <T extends readonly unknown[]>(
    ...iterables: ToIterables<T>
) => (
    new Zip<T>(...iterables)
);
/** dts2md break */
/**
 * An iterable object that yields tuples of values from
 * the given iterable objects and stops when the shortest one stops.
 */
export class Zip<T extends readonly unknown[]> implements Iterable<T> {
    /**
     * Constructor of {@link Zip}.
     */
    constructor(...iterables: ToIterables<T>) {
        this.iterables = iterables;
    }
    /**
     * First iterable.
     */
    readonly iterables: ToIterables<T>;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<T> {

        const iterators = this.iterables.map(
            (iterable) => (
                iterable[Symbol.iterator]()
            )
        );

        return {
            next() {

                const values = [] as unknown[];

                for (const iterator of iterators) {
                    const current = iterator.next();
                    if (current.done) {
                        return { done: true, value: undefined } as const;
                    } else {
                        values.push(current.value);
                    }
                }

                return { value: values as readonly unknown[] as T };

            },
        };

    }

}
