# eslint-config-hostelworld

Extends [`eslint-config-standard`](https://github.com/standard/eslint-config-standard).

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
