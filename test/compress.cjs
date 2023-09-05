// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { compress } = Iter;
    context.assertShallowEqual(
        [...compress([0, 1, 2], [true, false, true])],
        [0, 2]
    );
    context.assertShallowEqual(
        [...compress([3, 4, 5], [false, true, false])],
        [4]
    );
    context.assertShallowEqual(
        [...compress([6, 7, 8], [true])],
        [6]
    );
    context.assertShallowEqual(
        [...compress([9], [true, false, true])],
        [9]
    );
    context.assertShallowEqual(
        [...compress([], [true, false, true])],
        []
    );
    context.assertShallowEqual(
        [...compress([1, 3, 5], [])],
        []
    );
};
