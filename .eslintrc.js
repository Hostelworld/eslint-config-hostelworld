module.exports = {
    "env": {
        "browser": true
    },
    "plugins": [
        "html"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "extends": "standard",
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": [
            "error",
            "all"
        ]
    }
}