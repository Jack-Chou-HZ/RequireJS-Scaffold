"use strict";

define(['react', 'react-dom'], function (React, ReactDOM) {
    class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (<p>The Home</p>)
    }  
  }

  return Home;
});