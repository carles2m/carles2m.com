const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching
});

module.exports = withPWA({
  output: process.env.DOCKER === "1" ? "standalone" : undefined,
});