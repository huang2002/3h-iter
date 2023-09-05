// @ts-check
const { test } = require('3h-test');

test({
    include: (
        (process.argv.length > 2)
            ? process.argv.slice(2)
            : undefined
    ),
}, {
    range: require('./range.cjs'),
    chain: require('./chain.cjs'),
    compress: require('./compress.cjs'),
    zip: require('./zip.cjs'),
    zipLongest: require('./zipLongest.cjs'),
    filter: require('./filter.cjs'),
    map: require('./map.cjs'),
    slice: require('./slice.cjs'),
    iter2fn: require('./iter2fn.cjs'),
    fn2iter: require('./fn2iter.cjs'),
    repeat: require('./repeat.cjs'),
});
