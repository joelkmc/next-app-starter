import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactQueryProvider from '../src/infrastructure/react-query'
import GoogleAnalyticsProvider from '../src/infrastructure/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <GoogleAnalyticsProvider>
        <Component {...pageProps} />
      </GoogleAnalyticsProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
