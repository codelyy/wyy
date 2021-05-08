const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "component": resolve("src/components"),
      "commom":resolve("src/common"),
      "assets":resolve("src/assets"),
      "page":resolve("src/page"),
      "utils":resolve("src/utils"),
      "network":resolve("src/network"),
      "services":resolve("src/services"),
      "store":resolve("src/store"),
      "router":resolve("src/router"),
    },
  },
};