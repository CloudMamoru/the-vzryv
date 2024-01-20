module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:i18next/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    'prettier/prettier': [
      'warn',
      {
        semi: true, // Точка с запятой
        singleQuote: true, // Одиночные скобки
        jsxSingleQuote: true, // Одиночные скобки в jsx
        bracketSpacing: true, // Расстояние между { this }
        trailingComma: 'all', // Запятые в конце
        printWidth: 100, // Ширина
        tabWidth: 2, // Количество табов
        arrowParens: 'always', // Круглые скобки в функциях
        endOfLine: 'lf', // Конец линии
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
