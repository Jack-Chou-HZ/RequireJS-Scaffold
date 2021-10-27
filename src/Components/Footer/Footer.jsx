"use strict";

define([
  'react',
  'react-dom'],
  function (React, ReactDOM) {
    class Footer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <div className='float-right'>
            <p><b><i>MyEnergy</i></b><img src='../assets/favi.png' className='footer-logo' /> is a free product, it honors your privacy.</p>
          </div>
          )
      }
  }

  return Footer;
});
