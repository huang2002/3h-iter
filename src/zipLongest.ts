import { MixinMap, ToIterables } from './common';

/**
 * Create an iterable object that yields tuples of values from
 * the given iterable objects and stops when the longest one stops.
 * @example
 * ```js
 * [...Iter.zipLongest([0, 1, 2], 'ab', '-')]
 * // -> [[0, 'a'], [1, 'b'], [2, '-']]
 * ```
 */
export const zipLongest = <T extends readonly unknown[], TFill>(
    iterables: ToIterables<T>,
    fillValue: TFill,
) => (
    new ZipLongest<T, TFill>(iterables, fillValue)
);
/** dts2md break */
/**
 * An iterable object that yields tuples of values from
 * the given iterable objects and stops when the longest one stops.
 */
export class ZipLongest<T extends readonly unknown[], TFill> implements Iterable<MixinMap<T, TFill>> {
    /**
     * Constructor of {@link ZipLongest}.
     */
    constructor(
        iterables: ToIterables<T>,
        fillValue: TFill,
    ) {
        this.iterables = iterables;
        this.fillValue = fillValue;
    }
    /**
     * First iterable.
     */
    readonly iterables: ToIterables<T>;
    /**
     * The value that is used as placeholders
     * for early-stopped iterables.
     */
    readonly fillValue: TFill;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<MixinMap<T, TFill>> {

        const { fillValue } = this;
        const iterators = this.iterables.map(
            (iterable) => (
                iterable[Symbol.iterator]()
            )
        );

        return {
            next() {

                const values = [] as unknown[];
                let done = true;

                for (const iterator of iterators) {
                    const current = iterator.next();
                    if (current.done) {
                        values.push(fillValue);
                    } else {
                        done = false;
                        values.push(current.value);
                    }
                }

                if (done) {
                    return { done: true, value: undefined };
                } else {
                    return {
                        value: (
                            values as readonly unknown[] as MixinMap<T, TFill>
                        ),
                    };
                }

            },
        };

    }

}
