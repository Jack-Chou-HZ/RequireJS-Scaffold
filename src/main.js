"use strict";

requirejs.config({
  baseUrl: './libs',
  paths: {
    components: '../components',
    configs: '../configs'
  }
});
requirejs(['react', 'react-dom', 'components/App/App.js'], function (React, ReactDOM, App) {
  var appElm = document.getElementById('app');
  console.log(App);
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), appElm);
});