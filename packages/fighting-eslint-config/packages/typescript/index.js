module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    /**
     * typescript 规则配置
     * https://typescript-eslint.io/rules/
     */
    // 规定数组类型定义方式 https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/array-type': 'error',
    // 禁止的类型 https://typescript-eslint.io/rules/ban-types
    '@typescript-eslint/ban-types': 'off', // beta
    // 不允许尾随逗号 https://typescript-eslint.io/rules/comma-dangle
    '@typescript-eslint/comma-dangle': 'error',
    // 自定义对象类型样式 https://typescript-eslint.io/rules/consistent-indexed-object-style
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    // !禁止使用后缀运算符的非空断言 https://typescript-eslint.io/rules/no-non-null-assertion/
    '@typescript-eslint/no-non-null-assertion': 'error',
    // 强制一致地使用类型导入 https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': 'off',
    // 禁止未使用的变量 https://typescript-eslint.io/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': 'error',
    // 不可以有 any https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': 'error'
  },
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser' // 解决引入 type {} 报错问题
  }
}
