"use strict";

requirejs.config({
  baseUrl: './libs',
  paths: {
    components: '../components',
    configs: '../configs'
  }
});
requirejs(['react', 'react-dom', 'components/App/App.js'], function (React, ReactDOM, App) {
  const appElm = document.getElementById('app');

  ReactDOM.render(<App />, appElm);
});