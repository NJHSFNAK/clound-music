//对webpack配置别名
const path = require("path");
// 配置less
const CracoLessPlugin = require("craco-less");

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src")
    }
  },
  // 配置less
  plugins: [{ plugin: CracoLessPlugin }]
};
