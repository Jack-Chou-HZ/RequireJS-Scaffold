"use strict";

define([
  'react',
  'react-dom',
  'react-router-dom'],
  function (React, ReactDOM, ReactRouterDOM) {
    const {Link} = ReactRouterDOM

    class About extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        return (
          <article className='about'>
            <h1>What is MyEnergy?</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
              <i>MyEnergy</i> is like a mirror.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              You can see from it how you are doing everyday.<br />
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i>MyEnergy</i> is also like your personal assistant.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              You tell her to keep an eye on what matters, and she will remind you of them everyday. You can even tell her how you're doing everyday, she'll record it.<br />
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              After a period of time, when <i>MyEnergy</i> has accumulated some data, you can review how you were doing, what could be done better.<br />
            </p>
            <label className='float-right'><Link to='/monitor'>Login</Link> or <Link to='/signup'>Signup</Link></label>
          </article>
        )
      }
    }

    return About;
});
