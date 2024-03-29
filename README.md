# next-try-apply-get
> Try to get value from target(fn) or target(other data).

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-try-apply-get
```

## usage
```js
import '@jswork/next-try-apply-get';

// 1. target is function
const target1 = (data) => {
  return { name: 'fei', ...data };
};

// 2. target is not a function
const target2 = { name: 'aric' };


// get the results
const res1 = nx.tryApplyGet(target1, [{ github: 'afeiship', hobby: 'coding' }]);
const res2 = nx.tryApplyGet(target2);

/*
// res1
{
  name: 'fei',
  github: 'afeiship',
  hobby: 'coding'
}

// res2
{ name: 'aric' }
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-try-apply-get/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-try-apply-get
[version-url]: https://npmjs.org/package/@jswork/next-try-apply-get

[license-image]: https://img.shields.io/npm/l/@jswork/next-try-apply-get
[license-url]: https://github.com/afeiship/next-try-apply-get/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-try-apply-get
[size-url]: https://github.com/afeiship/next-try-apply-get/blob/master/dist/next-try-apply-get.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-try-apply-get
[download-url]: https://www.npmjs.com/package/@jswork/next-try-apply-get
