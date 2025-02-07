import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'jsx-a11y/recommended',
    '@typescript-eslint/recommended',
    'eslint-plugin-prettier/recommended'
  ),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'arrow-parens': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
];

export default eslintConfig;
