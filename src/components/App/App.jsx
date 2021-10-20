"use strict";

define([
'react', 
'react-dom', 
'react-router-dom', 
'components/About/About', 
'components/Profile/Profile', 
'components/Home/Home'], function (React, ReactDOM, ReactRouterDOM, About, Home) {
  const {
    BrowserRouter = Router,
    Switch,
    Route,
    Link
  } = ReactRouterDOM; 

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}; 
    }
    render() {
      return (<p>The App Component</p>) 
    }  
  }

  return App;
});