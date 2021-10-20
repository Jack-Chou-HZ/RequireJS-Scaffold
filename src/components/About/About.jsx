"use strict";

requirejs(['react', 'react-dom'], function (React, ReactDOM) {
    class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (<p>The About</p>)
    }  
  }

  return About;
});