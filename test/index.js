const Iter = require('..');
const T = require('3h-test');

T.test(null, {

    range(context) {

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
            [...range(-1, 0, .5)],
            [-1, -.5]
        );
        context.assertShallowEqual(
            [...range(0, -1, -.5)],
            [0, -.5]
        );
        context.assertShallowEqual(
            [...range(0, .5, .2)],
            [0, .2, .4]
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

    },

    chain(context) {
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
    },

    compress(context) {
        const { compress } = Iter;
        context.assertShallowEqual(
            [...compress([0, 1, 2], [true, false, true])],
            [0, 2]
        );
        context.assertShallowEqual(
            [...compress([3, 4, 5], [0, 1, 0])],
            [4]
        );
        context.assertShallowEqual(
            [...compress([6, 7, 8], [1])],
            [6]
        );
        context.assertShallowEqual(
            [...compress([9], [1, 0, 1])],
            [9]
        );
        context.assertShallowEqual(
            [...compress([], [1, 0, 1])],
            []
        );
        context.assertShallowEqual(
            [...compress([1, 3, 5], [])],
            []
        );
    },

    zip(context) {
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
    },

    zipLongest(context) {
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
    },

    filter(context) {
        const { filter } = Iter;
        context.assertShallowEqual(
            [...filter([0, 1, 2, 3], x => x & 1)],
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
    },

    map(context) {
        const { map } = Iter;
        context.assertShallowEqual(
            [...map([0, 1, 2], x => x * 2)],
            [0, 2, 4]
        );
        context.assertShallowEqual(
            [...map([3, 4, 5], (_, i) => i)],
            [0, 1, 2]
        );
        context.assertShallowEqual(
            [...map([], x => x ** 2)],
            []
        );
    },

});
