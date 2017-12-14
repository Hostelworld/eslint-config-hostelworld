# eslint-config-hostelworld

[![Build Status](https://api.travis-ci.org/Hostelworld/eslint-config-hostelworld.svg?branch=master)](https://travis-ci.org/Hostelworld/eslint-config-hostelworld)
[![npm](https://img.shields.io/npm/v/eslint-config-hostelworld.svg)](https://www.npmjs.com/package/eslint-config-hostelworld)
[![npm](https://img.shields.io/npm/dt/eslint-config-hostelworld.svg)](https://www.npmjs.com/package/eslint-config-hostelworld)

ESLint Shareable Config extending [`eslint-config-standard`](https://github.com/standard/eslint-config-standard).

## Installation

1. First install the following npm packages:

    ```bash
    # core package
    npm install --save-dev eslint-config-hostelworld
    # plus the peer dependencies
    npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
    ```

2. Then add `eslint-config-hostelworld` to your `.eslintrc.*` **extends** section:

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
