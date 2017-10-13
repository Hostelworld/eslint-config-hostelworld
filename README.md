# eslint-config-hostelworld

[travis-image]: https://img.shields.io/travis/hostelworld/eslint-config-hostelworld/master.svg
[travis-url]: https://travis-ci.org/hostelworld/eslint-config-hostelworld
[npm-image]: https://img.shields.io/npm/v/eslint-config-hostelworld.svg
[npm-url]: https://npmjs.org/package/eslint-config-hostelworld
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-hostelworld.svg
[downloads-url]: https://npmjs.org/package/eslint-config-hostelworld

This package provides Hostelworld's .eslintrc as an extensible shared config. It is created on top of [`standard`](https://github.com/standard/eslint-config-hostelworld)
with a few changes.


## Installation

First install the following npm package:

```bash
npm install --save-dev eslint-config-hostelworld
```

Then add `eslint-config-hostelworld` to your `.eslintrc.*` **extends** section:

```js
{
  "extends": [
      "hostelworld"
  ],
  "rules": {
      // Additional, per-project rules or overrides...
  }
}
```

## License

[MIT](LICENSE)
