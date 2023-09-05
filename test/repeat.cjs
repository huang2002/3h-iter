// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { repeat } = Iter;
    context.assertShallowEqual(
        [...repeat([0, 1], 2)],
        [0, 1, 0, 1]
    );
    context.assertShallowEqual(
        [...repeat([0, 1], 1)],
        [0, 1]
    );
    context.assertShallowEqual(
        [...repeat([0, 1], 0)],
        []
    );
    context.assertShallowEqual(
        [...repeat([0], 2)],
        [0, 0]
    );
    context.assertShallowEqual(
        [...repeat([0], 1)],
        [0]
    );
    context.assertShallowEqual(
        [...repeat([0], 0)],
        []
    );
    context.assertShallowEqual(
        [...repeat([], 2)],
        []
    );
    context.assertShallowEqual(
        [...repeat([], 1)],
        []
    );
    context.assertShallowEqual(
        [...repeat([], 0)],
        []
    );
};
