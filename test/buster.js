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
    "node_modules/es5-shim/es5-shim.js",
    "node_modules/lilprovider/dist/lilprovider.js",
    "node_modules/lil_/dist/lil_.js",
    "node_modules/lilobj/dist/lilobj.js",
    "lib/lilbus.js",
    "lib/lilview.js",
    "lib/lilcontroller.js"
  ],
  tests: [
    "test/*-test.js"
  ]
};