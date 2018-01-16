const puppeteer = require('puppeteer')
const rimraf = require('rimraf')
const os = require('os')
const path = require('path')
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

// teardown.js
module.exports = function() {
  // close the browser instance
  return global.__BROWSER__.close().then(() => {
    // clean-up the wsEndpoint file
    rimraf.sync(DIR);
  });
};
