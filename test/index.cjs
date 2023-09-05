// @ts-check
const { test } = require('3h-test');
const rangeTest = require('./range.cjs');
const chainTest = require('./chain.cjs');
const compressTest = require('./compress.cjs');
const zipTest = require('./zip.cjs');
const zipLongestTest = require('./zipLongest.cjs');
const filterTest = require('./filter.cjs');
const mapTest = require('./map.cjs');
const sliceTest = require('./slice.cjs');
const iter2fnTest = require('./iter2fn.cjs');
const fn2iterTest = require('./fn2iter.cjs');
const repeatTest = require('./repeat.cjs');

test({
    include: (
        (process.argv.length > 2)
            ? process.argv.slice(2)
            : undefined
    ),
}, {
    range: rangeTest,
    chain: chainTest,
    compress: compressTest,
    zip: zipTest,
    zipLongest: zipLongestTest,
    filter: filterTest,
    map: mapTest,
    slice: sliceTest,
    iter2fn: iter2fnTest,
    fn2iter: fn2iterTest,
    repeat: repeatTest,
});
