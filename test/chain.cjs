// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { chain } = Iter;
    context.assertShallowEqual(
        [...chain([0, 1], [2])],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...chain([0], [1], [2])],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...chain([0], [], [1, 2])],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...chain([0, 1], [2], [])],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...chain([], [0, 1, 2])],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...chain([])],
        []
    );
    context.assertShallowEqual(
        [...chain()],
        []
    );
};
