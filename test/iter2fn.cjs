// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { iter2fn } = Iter;

    const fn1 = iter2fn([0, 1, 2], null);
    context.assertStrictEqual(fn1(), 0);
    context.assertStrictEqual(fn1(), 1);
    context.assertStrictEqual(fn1(), 2);
    context.assertStrictEqual(fn1(), null);
    context.assertStrictEqual(fn1(), null);

    function* generator() {
        let value = yield 0;
        while (value < 5) {
            value = yield (value + 1);
        }
    }

    const fn2 = iter2fn(generator(), -1);
    context.assertStrictEqual(fn2(8), 0);
    context.assertStrictEqual(fn2(1), 2);
    context.assertStrictEqual(fn2(3), 4);
    context.assertStrictEqual(fn2(), -1);
    context.assertStrictEqual(fn2(), -1);

};
