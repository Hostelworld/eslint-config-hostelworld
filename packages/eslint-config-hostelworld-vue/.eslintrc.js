module.exports = {
    extends: ["eslint-config-hostelworld-base", "plugin:vue/recommended"],
    rules: {
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
        "vue/max-attributes-per-line": [2, {
            "singleline": 3,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "closeBracket": 0,
            "ignores": []
        }]
    }
}
