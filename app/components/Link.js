import NextLink from 'next/link'
import React, { Component } from 'react'
import { translate } from 'react-i18next'

class Link extends Component {

  render() {
    const { t } = this.props;
    return (
      <NextLink href={t('routes:' + this.props.href)}>
        <a>{this.props.children}</a>
      </NextLink>
    )
  }
}

export default translate(['routes'])(Link)
