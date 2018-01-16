const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
module.exports = function() {
  puppeteer.launch().then(browser => {
      // store the browser instance so we can teardown it later
    global.__BROWSER__ = browser;

    // file the wsEndpoint for TestEnvironments
    mkdirp.sync(DIR);
    fs.writeFileSync(path.join(DIR, "wsEndpoint"), browser.wsEndpoint());
  });
};
