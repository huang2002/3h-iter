// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { enumerate } = Iter;

    context.assertDeepEqual(
        [...enumerate([10, 11])],
        [[0, 10], [1, 11]],
    );

    context.assertDeepEqual(
        [...enumerate('ABC')],
        [[0, 'A'], [1, 'B'], [2, 'C']],
    );

    context.assertDeepEqual(
        [...enumerate([])],
        [],
    );

};
