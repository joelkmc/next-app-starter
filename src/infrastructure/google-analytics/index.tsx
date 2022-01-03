import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import { initializeGA, logPageView } from './ga'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GA_INITIALIZED: any
  }
}

const GoogleAnalyticsProvider: React.FC = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === undefined) return

    const routeChangeStart = (url: string): void => {
      logPageView(url)
    }

    if (!window.GA_INITIALIZED) {
      initializeGA()
      window.GA_INITIALIZED = true
    }

    router.events.on('routeChangeStart', routeChangeStart)

    return () => {
      if (typeof window === undefined) return

      router.events.off('routeChangeStart', routeChangeStart)
    }
  }, [router.events])

  useEffect(() => {
    hotjar.initialize(2644604, 6)
  }, [])

  return <>{children}</>
}

export default GoogleAnalyticsProvider
