/**
 * Type of {@link range}.
 */
interface RangeFactory {
    (stop: number): Range;
    (start: number, stop: number, step?: number): Range;
}
/** dts2md break */
/**
 * Create an iterable object that iterates the specific range.
 * @example
 * ```js
 * [...Iter.range(5)] // -> [0, 1, 2, 3, 4]
 * [...Iter.range(1, 4)] // -> [1, 2, 3]
 * [...Iter.range(0, .5, .2)] // -> [0, .2, .4]
 * ```
 */
export const range: RangeFactory = (a, b?, c?) => (
    new Range(a, b as number, c as number)
);
/** dts2md break */
/**
 * An iterable object that iterates the specific range.
 */
export class Range implements Iterable<number> {
    /**
     * Constructor of {@link Range}. \
     * Default step: `(stop > start) ? 1 : -1`.
     */
    constructor(stop: number);
    constructor(start: number, stop: number, step?: number);
    constructor(a: number, b?: number, c?: number) {

        if (b !== undefined) { // new Range(start, stop, step?)

            if (!Number.isFinite(a)) {
                throw new RangeError('invalid start');
            }

            this.start = a;
            this.stop = b;

            const defaultStep = (this.stop > this.start) ? 1 : -1;

            if (c !== undefined) {
                if (c === 0 || c * defaultStep < 0) {
                    throw new RangeError('invalid step');
                }
                this.step = c;
            } else {
                this.step = defaultStep;
            }

        } else { // new Range(stop)
            this.start = 0;
            this.stop = a;
            this.step = (a > 1) ? 1 : -1;
        }

    }
    /**
     * The start of the range.
     */
    readonly start: number;
    /**
     * The stop of the range.
     */
    readonly stop: number;
    /**
     * The step of iteration.
     */
    readonly step: number;
    /**
     * Iterator factory.
     */
    [Symbol.iterator](): Iterator<number, undefined, undefined> {
        const { start, stop, step } = this;
        let current = start;
        return {
            next() {
                const done = (
                    (step > 0)
                        ? (current >= stop)
                        : (current <= stop)
                );
                if (done) {
                    return { done, value: undefined };
                } else {
                    const value = current;
                    current += step;
                    return { value };
                }
            },
        };
    }

}
