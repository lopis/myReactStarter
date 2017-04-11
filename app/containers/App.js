import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import Head from 'next/head'
import Link from 'next/link'
import routes from '../routers/routes'

const Div = glamorous.div({
  color: '#333',
  fontSize: 32
})

class App extends Component {
  render () {
    console.log();
    return (
      <Div className='App'>
        <Head>
          <title>My React Starter</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <div>
          {this.props.children}
        </div>
        <ul>
          <li>
            <Link href={routes('index')}>
              <a>index page</a>
            </Link>
          </li>
          <li>
            <Link href={routes('info')} prefetch>
              <a>extra page</a>
            </Link>
          </li>
          <li>
            <Link href={routes('extra')} prefetch>
              <a>missing page</a>
            </Link>
          </li>
        </ul>
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
