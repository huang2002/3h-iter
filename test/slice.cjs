// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { slice } = Iter;
    const array = [0, 1, 2, 3, 4];
    context.assertShallowEqual(
        [...slice(array, 1, 4)],
        [1, 2, 3]
    );
    context.assertShallowEqual(
        [...slice(array, -Infinity, Infinity)],
        [0, 1, 2, 3, 4]
    );
    context.assertShallowEqual(
        [...slice(array, 0, 0)],
        []
    );
    context.assertShallowEqual(
        [...slice(array, 3, 1)],
        []
    );
    context.expectThrow(
        RangeError,
        slice,
        [array, 0, -1]
    );
};
