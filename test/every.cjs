// @ts-check
const Iter = require('..');

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { every } = Iter;

    context.assertStrictEqual(
        every([0, 1, 2], (x) => x <= 2),
        true,
    );

    context.assertStrictEqual(
        every([0, 1, 2], (x) => x < 2),
        false,
    );

    context.assertStrictEqual(
        every('js', (c) => c === 's'),
        false,
    );

    context.assertStrictEqual(
        every(new Map(), (x) => true),
        true,
    );
};
