// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { filter } = Iter;
    context.assertShallowEqual(
        [...filter([0, 1, 2, 3], x => ((x & 1) === 1))],
        [1, 3]
    );
    context.assertShallowEqual(
        [...filter([0, 1, 2, 3], x => !(x & 1))],
        [0, 2]
    );
    context.assertShallowEqual(
        [...filter([0, 1, 2, 3], _ => true)],
        [0, 1, 2, 3]
    );
    context.assertShallowEqual(
        [...filter([0, 1, 2, 3], _ => false)],
        []
    );
};
