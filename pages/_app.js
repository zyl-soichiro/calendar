import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge'></meta>
          <meta httpEquiv="content-language" content="ja"></meta>
          <title>カレンダー</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp