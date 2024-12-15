// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    plugins : {
      '@stylistic' : stylistic
    },
    rules : {
      'no-unused-vars' : 'off',
      '@typescript-eslint/no-unused-vars' : [ 'error', { 'argsIgnorePattern' : '^_' }],
      '@stylistic/semi' : [ 'error', 'never' ],
      '@stylistic/quotes': [ 'error', 'single' ]
    },
    languageOptions : {
      parserOptions : {
	projectService : {
	  allowDefaultProject : [ '*.mjs' ]
	},
	tsconfigRootDir : import.meta.dirname,
      }
    }
  }
)
