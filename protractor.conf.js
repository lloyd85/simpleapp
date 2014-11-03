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

  seleniumPort: null,
  //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar', //works when ran locally
  seleniumAddress: 'http://localhost:4444/wd/hub', // this works when ran globally
  //chromeDriver: 'node_modules/protractor/selenium/chromedriver', // needed when ran locally
  //baseUrl: 'http://localhost:63343/simpleapp/build/#/home',

  framework: 'jasmine'

};
