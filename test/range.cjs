// @ts-check
const Iter = require('..');

/**
 * @param {import('3h-test').TestContext} context
 */
module.exports = (context) => {

    const { range } = Iter;

    context.assertShallowEqual(
        [...range(3)],
        [0, 1, 2]
    );
    context.assertShallowEqual(
        [...range(1, 3)],
        [1, 2]
    );
    context.assertShallowEqual(
        [...range(3, 0)],
        [3, 2, 1]
    );
    context.assertShallowEqual(
        [...range(6, 6)],
        []
    );
    context.assertShallowEqual(
        [...range(-1, 0, 0.5)],
        [-1, -0.5]
    );
    context.assertShallowEqual(
        [...range(0, -1, -0.5)],
        [0, -0.5]
    );
    context.assertShallowEqual(
        [...range(0, 0.5, 0.2)],
        [0, 0.2, 0.4]
    );

    const iterator = range(Infinity)[Symbol.iterator]();
    context.assertStrictEqual(
        iterator.next().value,
        0
    );
    context.assertStrictEqual(
        iterator.next().value,
        1
    );
    context.assertStrictEqual(
        iterator.next().value,
        2
    );
    context.assertStrictEqual(
        Boolean(iterator.next().done),
        false
    );

    context.expectThrow(
        range,
        RangeError,
        [Infinity, 5]
    );
    context.expectThrow(
        range,
        RangeError,
        [0, 5, -1]
    );
    context.expectThrow(
        range,
        RangeError,
        [0, Infinity, -1]
    );
    context.expectThrow(
        range,
        RangeError,
        [0, -Infinity, 1]
    );
    context.expectThrow(
        range,
        RangeError,
        [5, 0, 1]
    );
    context.expectThrow(
        range,
        RangeError,
        [0, 5, 0]
    );

};
