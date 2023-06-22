module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 代码同时运行在浏览器和 Node.js 中
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // 同时检测代码是否符合eslint和prettier的规范
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react"],
  // elint的一些规则
  rules: {
    "@typescript-eslint/no-var-requires": "off"
  }
};
