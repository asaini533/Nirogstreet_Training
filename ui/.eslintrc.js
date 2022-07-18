module.exports = {
    env: {
      es6: true,
      node: true,
      mocha: true
    },
    extends: [
      'airbnb-base',
      'plugin:react-hooks/recommended',
      'next'
    ],
    root: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaVersion: 2015,
      sourceType: 'module'
    },
    settings: {
      'import/resolver': {
        node: {
          paths: [
            'src',
            'test',
            'config'
          ]
        }
      }
    },
    plugins: [
      'mocha',
      "react-hooks"
    ],
    rules: {
      'no-unused-expressions': 0,
      'chai-friendly/no-unused-expressions': 2,
      'class-methods-use-this': 'off',
      'no-multi-str': 'off',
      'no-underscore-dangle': 'off',
      "import/no-unresolved": 'off',
      "no-plusplus": 'off',
      indent: [
        'error',
        2
      ],
      'comma-dangle': [
        'error',
        'never'
      ],
      'no-tabs': 0,
      'max-len': [
        2,
        150,
        4,
        {
          ignoreComments: true,
          ignoreUrls: true,
          ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
        }
      ],
      'no-shadow': 'off',
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    }
  };
  