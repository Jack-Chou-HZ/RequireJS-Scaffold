// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a React component emulates the Google header

define([
  'react',
  'react-dom',
  'react-router-dom',
  'antd',
  'components/Profile/Profile'],
  function (React, ReactDOM, ReactRouterDOM, AntD, Profile) {
    const {
      Route,
      Link
    } =  ReactRouterDOM

    class Header extends React.Component {
      constructor (props) {
        super(props)
        this.state = {}
      }

      componentDidMount () {

      }

      render () {
        return (
          <div className='header'>
            <Link to='/about'>About</Link>
            <label className='float-right'> &nbsp;|&nbsp;<Link to='/signup'>Signup</Link></label>
            <Link to='/monitor' className='float-right'>Login</Link>
          </div>
        )
      }
    }

  return Header
  }
)
