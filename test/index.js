import { CLIEngine } from 'eslint';
import { assert } from 'chai';

const paths = [
    'index.js',
    'test/index.js'
];
const engine = new CLIEngine({
    envs: ['node', 'mocha'],
    useEslintrc: true
});

const results = engine.executeOnFiles(paths).results;

const generateTest = result => {
    const { filePath, messages } = result;

    it(`validates ${filePath}`, function () {
        if (messages.length > 0) {
            assert.fail(false, true, formatMessages(messages));
        }
    });
};

const formatMessages = messages => {
    const errors = messages.map((message) => {
        return `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}\n`;
    });

    return `\n${errors.join('')}`;
};

describe('ESLint', function () {
    results.forEach((result) => generateTest(result));
});
