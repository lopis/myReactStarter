import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
}

  render () {
    return (
     <html>
       <Head>
         <title>My React Starter App</title>
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
         
       </Head>
       <body>
         {this.props.value}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
