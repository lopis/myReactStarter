import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import Head from 'next/head'
import Link from '../components/Link'
import { translate } from 'react-i18next';

const Div = glamorous.div({
  color: '#333',
  fontSize: 32
})

class App extends Component {
  render () {
    const { t } = this.props;

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
            <Link href="index">
              {t('index')}
            </Link>
          </li>
          <li>
            <Link href="info" prefetch>
              {t('extra')}
            </Link>
          </li>
          <li>
            <Link href="extra" prefetch>
              {t('missing')}
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

export default connect(mapStateToProps)(
  translate(['common', 'routes'])(App)
)
