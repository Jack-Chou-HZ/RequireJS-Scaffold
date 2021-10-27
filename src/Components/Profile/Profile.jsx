// Filename:
//   profile.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the Profile component which holds all questions
// configed for the current user.
//   It read profile from database and displays it on the monitor component.

define([
  'react',
  'react-dom',
  'antd',
  'prop-types.min'],
  function (React, ReactDOM, AntD, PropTypes) {
    class Profile extends React.Component {
      constructor (props) {
        super(props)
        this.state = { answers: [] }

        this.getProfile = this.constructProfile.bind(this)

        this.onTabsChangedHandler = this.onTabsChangedHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
      }

      componentDidMount () {
      }

      handleChange (event) {
        console.log(event.target)
        const { name, value } = event.target
        const question = {}
        question[name] = value
        this.setState({ answers: { ...this.state.answers, ...question } })
      }

      handleSubmit (event) {
        console.log('state and props')
        console.log(this.state)
        console.log(this.props)
        event.preventDefault()
        // invoke service to update database
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            const status = xhr.status
            if (status === 0 || (status >= 200 && status < 400)) {
              console.log('Success: profile saved!')
            } else {
              throw new Error('Error: answers not saved!')
            }
          }
        }

        xhr.open('POST', '/saveprofile', true)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(this.state.answers || [])
      }

      handleReset (event) {
        this.setState({ answers: [] })
        event.preventDefault()
      }

      // construct profile based on component props
      constructProfile () {
        const { Tabs } = AntD
        const { TabPane } = Tabs

        const { defaultQuestions } = this.props
        if (defaultQuestions) {
          return (
              <form onSubmit={this.handleSubmit} className='profile'>
                <Tabs defaultActiveKey="0" onChange={this.onTabsChangedHandler}>
                  <TabPane tab={'Physical status'} key="0">
                    {defaultQuestions.map((item, index) => (
                      <div className='question' key={index}>
                        <div className='ask'>
                          <label>{item.questionText}</label>
                        </div>
                        <div className='answer'>
                          <input type="number"
                            name='answer'
                            min={0}
                            max={100}
                            value={this.state.answers[item.seq] || ''}
                            onChange={this.handleChange}
                          />
                          <label>great, with any comments?</label>
                          <input type="text"
                            name='comments'
                            className='answer-comment'
                            value={this.state.answers[item.seq] || ''}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>))}
                  </TabPane>
                </Tabs>
                <div className='button'>
                  <input type="submit" value="Save" />
                  <input type="button" value="Cancel" onClick={this.handleSubmit} />
                </div>
             </form>)
        } else {
          return (<h2>Loading initial questions...</h2>)
        }
      }

      onTabsChangedHandler () {

      }

      render () {
        return this.constructProfile(this.props.userId)
      }
    }

    // define property types
    Profile.propTypes = {
      userId: PropTypes.number,
      defaultQuestions: PropTypes.array

    }

  return Profile
})
