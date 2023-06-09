const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    supportFile: false,
    video: false,
  },
});
