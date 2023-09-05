# 3h-iter

> An iterator lib.

## Introduction

`3h-iter` is an iterator library that provides useful iterator-related helpers,
such as `map`, `range`, `chain`, `zip` and so on.
It is recommanded to use `3h-iter` with ES2015+ syntax.

## Example Usage

```js
import { range, zip } from '3h-iter';

for (const i of range(5)) {
    console.log(i);
}
// Prints 0 through 4 in console.

const numbers = [0, 1, 2];
const strings = ['a', 'b', 'c'];
for (const tuple of zip(numbers, strings)) {
    console.log(tuple);
}
// Prints the following tuples:
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## Links

- [API Reference](https://github.com/huang2002/3h-iter/wiki)
- [Changelog](./CHANGELOG.md)
- [License (MIT)](./LICENSE)
