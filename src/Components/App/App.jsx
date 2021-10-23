"use strict";

define([
'react', 
'react-dom', 
'react-router-dom',
'components/Header/Header',
'components/Monitor/Monitor',
'components/Profile/Profile',
'components/About/About',
'components/Footer/Footer'],
function (React, ReactDOM, ReactRouterDOM, Header, Monitor, Profile, About, Footer) {
  const {
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
        <div className='app'>
          <Header />
          <div className='body'>
            <div className='logo'>
              <label>MyEnergy</label>
            </div>
            <Switch>
              <Route path='/monitor'><Monitor /></Route>
              <Route path='/profile'><Profile /></Route>
              <Route path='/'><About /></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>) 
    }  
  }

  return App;
});
