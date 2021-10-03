import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* <meta charSet='utf-8' /> */}
          {/* <link rel="shurtcut icon" href="/m.ico" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
