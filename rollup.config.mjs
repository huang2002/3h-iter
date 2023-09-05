import rollupPluginBabel from "@rollup/plugin-babel";

const input = './js/index.js';

export default [
    {
        input,
        plugins: [
            rollupPluginBabel({
                babelHelpers: 'bundled',
            })
        ],
        output: {
            format: 'umd',
            name: 'Iter',
            file: './dist/3h-iter.umd.js'
        }
    },
    {
        input,
        output: {
            format: 'esm',
            file: './dist/3h-iter.js'
        }
    }
];
