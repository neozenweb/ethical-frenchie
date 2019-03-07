module.exports = {
  env: {
    browser: true,
    jquery: true,
    jest: true,
    node: true,
    serviceworker: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  plugins: ['html', 'prettier'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': 0,
    'consistent-return': 0,
    curly: 2,
    'dot-notation': 2,
    'func-names': 0,
    'id-length': [
      2,
      {
        exceptions: ['i', 'a', 'b', 'e', 'el'],
      },
    ],
    import: 0,
    'import/extensions': 0,
    'import/no-unresolved': [2, {caseSensitive: false}],
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      1,
      {
        ignoreSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'no-useless-return': 2,
    'no-var': 2,
    'max-len': 0,
    'one-var': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-promise-reject-errors': 2,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: false,
        endOfLine: 'auto',
        jsxBracketSameLine: false,
        printWidth: 80,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'radix': 0,
    'sort-imports': 0,
    'sort-keys': [
      2,
      "asc",
      {
        "caseSensitive": true,
        "natural": true
      }
    ],
    'sort-vars': 2,
    'space-before-function-paren': 0,
    strict: [2, 'global'],
  },
  settings: {
    'import/no-unresolved': [2, {caseSensitive: false}],
    'import/resolver': 'webpack',
  },
};
