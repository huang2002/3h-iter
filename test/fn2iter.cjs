// @ts-check
const Iter = require("..");

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { fn2iter } = Iter;

    const stop = 3;
    let i = 0;

    const fn = () => (
        (i < stop) ? i++ : null
    );

    const iter = fn2iter(fn, null);

    context.assertShallowEqual(
        [...iter],
        [0, 1, 2]
    );

};
