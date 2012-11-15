var config = module.exports;

config["lilmvc node tests"] = {
  rootPath: "../",
  environment: "node",
  tests: [
    "test/*-test.js"
  ]
};

config["lilmvc browser tests"] = {
  rootPath: "../",
  environment: "browser",
  sources: [
    "node_modules/es5-shim/es5-shim.js",
    "dist/lilmvc.js"
  ],
  tests: [
    "test/*-test.js"
  ]
};