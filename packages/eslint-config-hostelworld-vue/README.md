# eslint-config-hostelworld-vue

Extends [`eslint-config-standard`](https://github.com/standard/eslint-config-standard) and [eslint-plugin-vue (vue/recommended)](https://github.com/vuejs/eslint-plugin-vue).


1. First install the following npm packages:

    ```bash
    # core package
    npm install --save-dev eslint-config-hostelworld-vue
    # plus the peer dependencies
    npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-config-hostelworld-base eslint-plugin-vue@next
    ```

2. Then add `eslint-config-hostelworld-vue` to your `.eslintrc.*` **extends** section:

    ```js
    {
        "extends": [
            "hostelworld-vue"
        ],
        "rules": {
            // Additional, per-project rules or overrides...
        }
    }
    ```

