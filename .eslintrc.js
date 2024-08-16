module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    parser: '@typescript-eslint/parser', 
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', 
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript', 
    ],
    plugins: ['react', '@typescript-eslint', 'import'],
    parserOptions: {
      ecmaVersion: 2020, 
      sourceType: 'module', 
      ecmaFeatures: {
        jsx: true, 
      },
    },
    settings: {
      react: {
        version: 'detect', 
      },
      'import/resolver': {
        typescript: {}, 
      },
    },
    rules: {
        'react/prop-types': 'off', 
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-unresolved': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'], 
        rules: {
          '@typescript-eslint/explicit-function-return-type': 'off',
        },
      },
    ],
  };
  