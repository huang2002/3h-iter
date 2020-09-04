type RangeFactory =
    | ((stop: number) => Range)
    | ((start: number, stop: number, step?: number) => Range);
/** dts2md break */
/**
 * Create an iterable object that iterates the specific range
 * @example
 * ```js
 * [...Iter.range(5)] // -> [0, 1, 2, 3, 4]
 * [...Iter.range(1, 4)] // -> [1, 2, 3]
 * [...Iter.range(0, .5, .2)] // -> [0, .2, .4]
 * ```
 */
export const range: RangeFactory = (a, b, c) => new Range(a, b, c);
/** dts2md break */
export class Range implements Iterable<number> {
    /** dts2md break */
    constructor(stop: number); // [0]
    constructor(start: number, stop: number, step?: number); // [1]
    constructor(a: number, b?: number, c?: number) {
        if (b !== undefined) { // [1]

            this.start = a;
            this.stop = b;

            const defaultStep = this.stop > this.start ? 1 : -1;

            if (c !== undefined) {
                if (c === 0 || c * defaultStep < 0) {
                    throw new RangeError('invalid step');
                }
                this.step = c;
            } else {
                this.step = defaultStep;
            }

        } else { // [0]
            this.start = 0;
            this.stop = a;
            this.step = a > 1 ? 1 : -1;
        }
    }
    /** dts2md break */
    readonly start: number;
    readonly stop: number;
    readonly step: number;
    /** dts2md break */
    [Symbol.iterator](): Iterator<number> {
        const { start, stop, step } = this;
        let current = start;
        return {
            next() {
                const done = (
                    step > 0
                        ? current >= stop
                        : current <= stop
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
