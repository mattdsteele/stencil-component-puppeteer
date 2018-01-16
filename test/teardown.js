const puppeteer = require('puppeteer')
const rimraf = require('rimraf')
const os = require('os')
const path = require('path')

// teardown.js
module.exports = function() {
  // close the browser instance
  global.__BROWSER__.close().then(() => {
    // clean-up the wsEndpoint file
    rimraf.sync(DIR);
  });
};
