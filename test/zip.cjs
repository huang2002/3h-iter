// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {
    const { zip } = Iter;
    context.assertStrictEqual(
        JSON.stringify([...zip([0, 1, 2], [3, 4, 5])]),
        JSON.stringify([[0, 3], [1, 4], [2, 5]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([0, 1], [3, 4, 5])]),
        JSON.stringify([[0, 3], [1, 4]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([0, 1, 2], [3, 4])]),
        JSON.stringify([[0, 3], [1, 4]])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([0, 1], [])]),
        JSON.stringify([])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([], [6, 7, 8])]),
        JSON.stringify([])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([], [])]),
        JSON.stringify([])
    );
    context.assertStrictEqual(
        JSON.stringify([...zip([0], [1, 2], [3, 4, 5])]),
        JSON.stringify([[0, 1, 3]])
    );
};
