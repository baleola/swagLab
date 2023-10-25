import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    env: {
      USER_PW: "secret_sauce",
      STANDARD_USER_NAME: "standard_user",
    },
  },
});
