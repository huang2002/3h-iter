// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { iter2fn } = Iter;
    const fn = iter2fn([0, 1, 2], null);
    context.assertStrictEqual(fn(), 0);
    context.assertStrictEqual(fn(), 1);
    context.assertStrictEqual(fn(), 2);
    context.assertStrictEqual(fn(), null);
    context.assertStrictEqual(fn(), null);
};
