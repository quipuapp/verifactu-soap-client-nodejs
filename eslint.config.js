const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')

module.exports = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // exclude generated files
  {
    ignores: ['src/generated/**/*', 'node_modules/**/*'],
  },
)
