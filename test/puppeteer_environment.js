const NodeEnvironment = require("jest-environment-node");
const puppeteer = require("puppeteer");
const fs = require("fs");
const os = require("os");
const path = require("path");

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  setup() {
    super
      .setup()
      .then(() => {
        // get the wsEndpoint
        const wsEndpoint = fs.readFileSync(
          path.join(DIR, "wsEndpoint"),
          "utf8"
        );
        if (!wsEndpoint) {
          throw new Error("wsEndpoint not found");
        }
      })
      .then(() => {
        // connect to puppeteer
        return puppeteer.connect({
          browserWSEndpoint: wsEndpoint
        });
      })
      .then(browser => {
        this.global.__BROWSER__ = browser;
      });
  }

  teardown() {
    return super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
