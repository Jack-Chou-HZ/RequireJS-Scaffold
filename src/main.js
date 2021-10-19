"use strict";

requirejs.config({
  baseUrl: './libs',
  paths: {
    modules: '../modules',
    configs: '../configs'
  }
}); // Wrap codes that depends on the readiness of the DOM

requirejs(['domReady'], function (dom) {
  requirejs(['modules/robert'], function (Rob) {
    var rob = new Rob('James');
    rob.sayHi();
  });
});