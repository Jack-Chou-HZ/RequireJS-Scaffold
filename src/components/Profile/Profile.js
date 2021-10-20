"use strict";

define(['react', 'react-dom'], function (React, ReactDOM) {
  class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return /*#__PURE__*/React.createElement("p", null, "The Profile");
    }

  }

  return Profile;
});