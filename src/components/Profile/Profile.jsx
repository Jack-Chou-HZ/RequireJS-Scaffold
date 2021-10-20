"use strict";

define(['react', 'react-dom'], function (React, ReactDOM) {
  class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (<p>The Profile</p>)
    }  
  }

  return Profile;
});