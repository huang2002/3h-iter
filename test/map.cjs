// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { map } = Iter;
    context.assertShallowEqual(
        [...map([0, 1, 2], x => x * 2)],
        [0, 2, 4]
    );
    context.assertShallowEqual(
        [...map([3, 4, 5], (_, i) => i)],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...map([], x => x ** 2)],
        []
    );
};
