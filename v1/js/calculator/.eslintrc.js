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
    'arrow-body-style': [ 'warn', 'as-needed' ],
    'arrow-parens': [ 2, "as-needed", { "requireForBlockBody": true } ],
    'brace-style': [ 'error', 'stroustrup' ],
    'comma-dangle': [ 'warn', 'always-multiline' ],
    'consistent-return': 'off',
    'curly': [ 'warn', 'multi-or-nest' ],
    'eol-last': [ 'error', 'always' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'indent': [ 'error', 2, { "MemberExpression": 1 } ],
    'linebreak-style': [ 'error', 'unix' ],
    'max-len': [ 'error', { code: 120 } ],
    'no-console': 'off',
    'no-param-reassign': 'error',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-useless-escape': 'error',
    'object-curly-spacing': [ 'warn', 'always' ],
    'prefer-destructuring': [
      'error',
      { 'array': false, 'object': true },
      { 'enforceForRenamedProperties': true },
    ],
    'prefer-object-spread': 'off',
    semi: 'off',
    'space-before-function-paren': [ 'error', 'always' ],
    'vue/attributes-order': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/no-v-html': 'warn', // Warn (where we're using it, it is safe)
    'vue/order-in-components': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
