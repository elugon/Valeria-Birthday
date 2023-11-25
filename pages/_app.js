import '../styles/globals.css'
import '../styles/typography.css'
import Script from 'next/script'
import Head from 'next/head'
import Navigation from 'components/Navigation'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Elu Gonzalez'></meta>
        <link rel='shortcut icon' href='/img/favicon.png' />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
