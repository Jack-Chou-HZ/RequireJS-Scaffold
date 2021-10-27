// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a Greetings component

define(['react',
  'react-dom'],
  function (React, ReactDOM) {
    class Greetings extends React.Component {
      constructor (props) {
        super(props)
        this.state = {greetings: props.greetings || `Hi, how are you doing today?`}
      }

      componentDidMount () {
      }

      componentWillUnmount () {
      }

      render () {
        return (
          <div className='monitor-welcome'>
            <div className='monitor-greetings'>
              <label>{this.state.greetings}</label>
            </div>
            <div className='monitor-askings'>
              <label>Please tell me how you feel, because that's important to me.</label>
            </div>
          </div>
        )
      }
    }

  return Greetings
})
