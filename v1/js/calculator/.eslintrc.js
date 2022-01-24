module.exports = {
  root: true,

  "env": {
    "browser": true,
    "es2020": true,
    "node": true,
  },

  "extends": [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],

  "globals": {
    "describe": "writeable",
    "expect": "writeable",
    "test": "writeable",
  },

  "parserOptions": {
    "ecmaVersion": "latest",
  },

  "plugins": [
    "vue",
  ],

  "rules": {
    'array-bracket-spacing': [ 'warn', 'always' ],
    'arrow-body-style': [ 'warn', 'always' ],
    'arrow-parens': [ 2, "as-needed", { "requireForBlockBody": true } ],
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'warn', 'stroustrup', { 'allowSingleLine': false } ],
    'comma-dangle': [
      'error',
      {
        "arrays": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
        "imports": "always-multiline",
        "objects": "always-multiline",
      },
    ],
    'consistent-return': 'off',
    'curly': 'error',
    'eol-last': [ 'error', 'always' ],
    // 'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2, { 'MemberExpression': 1, 'ignoreComments': false, 'SwitchCase': 1 } ],
    'keyword-spacing': 'warn',
    'linebreak-style': [ 'error', 'unix' ],
    'max-len': [ 'warn', { code: 120, 'ignoreStrings': true } ],
    'multiline-ternary': [ 'warn', 'always' ],
    'no-console': 'off',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-useless-escape': 'warn',
    'object-curly-spacing': [ 'warn', 'always' ],
    // // 'prefer-destructuring': [
    // //   'warn',
    // //   { 'array': false, 'object': true },
    // //   { 'enforceForRenamedProperties': true },
    // // ],
    'prefer-object-spread': 'error',
    'semi': [ 'error', 'always' ],
    'space-before-blocks': [ 'warn', 'always' ],
    'space-before-function-paren': [ 'warn', 'always' ],
    'vue/attributes-order': 'off',
    // // 'vue/component-definition-name-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/no-v-html': 'warn', // Warn (where we're using it, it is safe)
    'vue/order-in-components': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-debugger': process.env.NODE_ENV === 'production'
      ? 'warn'
      : 'off',
  },
};
