var config = module.exports;

config["lilmvc node tests"] = {
    rootPath: "../",
    env: "node",
    tests: [
        "test/*-test.js"
    ]
};

config["lilmvc browser tests"] = {
  rootPath: "../",
  environment: "browser",
  sources: [
    "test/lib/es5-shim.js",
    "test/lib/jquery.js",
    "lib/lilmvc.js"
  ],
  tests: [
    "test/*-test-browser.js",
    "test/*-test.js"
  ]
};