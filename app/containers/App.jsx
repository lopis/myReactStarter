import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import glamorous from 'glamorous'

const Div = glamorous.div({
  color: "#333",
  fontSize: 32
})

class App extends Component {

  render() {
    return (
      <Div className="App">
        Hello World
      </Div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(App)
