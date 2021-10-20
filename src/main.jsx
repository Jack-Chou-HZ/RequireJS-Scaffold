"use strict";

requirejs.config({
  baseUrl: './libs',
  paths: {
    components: '../components',
    configs: '../configs'
  }
});
requirejs(['react', 'react-dom', 'components/App/App'], function (React, ReactDOM, App) {
  const appElm = document.getElementById('app');

  console.log(App)
  ReactDOM.render(<App />, appElm);
});