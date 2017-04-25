import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import { css } from 'glamor'
import Head from 'next/head'
import Link from '../components/Link'
import { translate } from 'react-i18next';

const Div = glamorous.div({
  color: '#333',
  fontSize: 32
})

export const bgRed = css({
  backgroundColor: 'indianred',
})

class App extends Component {
  render () {
    const { t } = this.props;

    return (
      <Div>
        <div className={bgRed}>
          {this.props.children}
        </div>
        <ul>
          <li>
            <Link href="index">
              {t('common:index')}
            </Link>
          </li>
          <li>
            <Link href="info" prefetch>
              {t('common:extra')}
            </Link>
          </li>
          <li>
            <Link href="extra" prefetch>
              {t('common:missing')}
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
