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
        this.state = { date: new Date(), quote: '"' + 'Business is not a job but a mindset.' + '"' }
      }

      componentDidMount () {
      }

      componentWillUnmount () {
      }

      render () {
        return (
          <div className='header'>
            <div className='greetings'>
              <label>Hi, how are you doing today?</label>
            </div>
          </div>
        )
      }
    }

  return Greetings
})
