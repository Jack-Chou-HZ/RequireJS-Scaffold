"use strict";

define(['react', 'react-dom'], function (React, ReactDOM) {
    class Monitor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (<p>The Monitor</p>) 
    }  
  }

  return Monitor;
});