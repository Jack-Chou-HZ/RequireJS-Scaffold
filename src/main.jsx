"use strict";

requirejs.config({
  baseUrl: './libs',
  paths: {
    components: '../Components',
    services: '../services',
    configs: '../configs'
  }
});
requirejs([
  'react',
  'react-dom',
  'components/App/App'],
  function (React, ReactDOM, App) {
    const appElm = document.getElementById('app');

    ReactDOM.render(<App />, appElm);
});
