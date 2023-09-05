// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { fn2iter } = Iter;

    const fn1 = (() => {
        const stop = 3;
        let i = 0;
        return () => (
            (i < stop) ? i++ : null
        );
    })();
    const iterable1 = fn2iter(fn1, null);
    context.assertShallowEqual(
        [...iterable1],
        [0, 1, 2]
    );

    /**
     * @param {[] | [number]} args
     */
    const fn2 = (...args) => (
        args.length ? args[0] : 0
    );
    const iterable2 = fn2iter(fn2, -1);
    const iterator2 = /** @type {Iterator<number, undefined, number>} */(
        iterable2[Symbol.iterator]()
    );
    context.assertShallowEqual(
        iterator2.next(),
        { value: 0 },
    );
    context.assertShallowEqual(
        iterator2.next(),
        { value: 0 },
    );
    context.assertShallowEqual(
        iterator2.next(2),
        { value: 2 },
    );
    context.assertShallowEqual(
        iterator2.next(8),
        { value: 8 },
    );
    context.assertShallowEqual(
        iterator2.next(-1),
        { done: true, value: undefined },
    );

};
