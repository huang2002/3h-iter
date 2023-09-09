// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { count } = Iter;

    context.assertStrictEqual(
        count([0, 1, 2]),
        3,
    );

    context.assertStrictEqual(
        count('js'),
        2,
    );

    context.assertStrictEqual(
        count(new Map()),
        0,
    );

};
