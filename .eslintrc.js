/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-02 22:07:30
 * @LastEditTime: 2022-11-20 11:45:27
 * @FilePath: /piniaVite_ts/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 0, // 变量未使用
    eqeqeq: 0, //三等号
    'prefer-const': 0, //
    'no-callback-literal': 0,
    //  semi: ['error', 'never'], // 取消末尾分号 always 使用
    semi: 0,
    singleQuote: true, // 使用单引号替代双引号
    quotes: [1, 'single'], //引号类型 `` "" ''
    'linebreak-style': [0, 'error', 'windows'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ]
  }
}
