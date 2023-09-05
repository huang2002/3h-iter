// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { zipLongest } = Iter;
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([0, 1, 2], [3, 4, 5], -1)]),
        JSON.stringify([[0, 3], [1, 4], [2, 5]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([0, 1], [3, 4, 5], -1)]),
        JSON.stringify([[0, 3], [1, 4], [-1, 5]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([0, 1, 2], [3, 4], -1)]),
        JSON.stringify([[0, 3], [1, 4], [2, -1]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([0, 1], [], -1)]),
        JSON.stringify([[0, -1], [1, -1]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([], [6, 7, 8], -1)]),
        JSON.stringify([[-1, 6], [-1, 7], [-1, 8]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zipLongest([], [], -1)]),
        JSON.stringify([])
    );
};
