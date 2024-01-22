// @ts-check
const Iter = require('..');

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { some } = Iter;

    context.assertStrictEqual(
        some([0, 1, 2], (x) => x >= 2),
        true,
    );

    context.assertStrictEqual(
        some([0, 1, 2], (x) => x < 0),
        false,
    );

    context.assertStrictEqual(
        some('js', (c) => c === 'j'),
        true,
    );

    context.assertStrictEqual(
        some(new Map(), (x) => true),
        false,
    );
};
