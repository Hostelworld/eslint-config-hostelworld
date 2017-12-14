module.exports = {
    extends: 'standard',
    rules: {
        // https://eslint.org/docs/rules/indent
        'indent': [
            'error',
            4,
            { 'SwitchCase': 1 }
        ],
        // https://eslint.org/docs/rules/semi
        'semi': [
            'error',
            'always'
        ],
        // https://eslint.org/docs/rules/curly
        'curly': [
            'error',
            'all'
        ]
    }
}
