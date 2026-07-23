import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // `motion` (framer-motion) and `Icon` (mapped icon components) are used
      // only as JSX member/element tags (e.g. <motion.div>, <Icon />), which the
      // core no-unused-vars rule does not detect. Allow them explicitly.
      'no-unused-vars': [
        'error',
        { varsIgnorePattern: '^([A-Z_]|motion|Icon)$' },
      ],
    },
  },
])
