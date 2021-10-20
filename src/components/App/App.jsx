"use strict";

define([
'react', 
'react-dom', 
'react-router-dom', 
'components/About/About', 
'components/Profile/Profile', 
'components/Home/Home'], function (React, ReactDOM, ReactRouterDOM, About, Profile, Home) {
  const {
    // BrowserRouter = Router,
    BrowserRouter,
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
      return (<BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path='/about'><About /></Route>
            <Route path='/profile'><Profile /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </div>
      </BrowserRouter>) 
    }  
  }

  return App;
});