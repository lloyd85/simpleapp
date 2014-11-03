exports.config = {
  allScriptsTimeout: 71000,

  specs: [
    'e2e-tests/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 70000
  },

  seleniumPort: 4444,
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: 'node_modules/protractor/selenium/chromedriver',
  //baseUrl: 'http://localhost:63343/simpleapp/build/#/home',

  framework: 'jasmine'

};
