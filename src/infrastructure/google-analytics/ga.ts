import ReactGA from 'react-ga'

const GA_TRACKING_ID = 'UA-73943338-13'

export const initializeGA = (): void => {
  console.log('GA init')
  ReactGA.initialize(GA_TRACKING_ID)
}

export const logPageView = (url: string): void => {
  if (!url.includes('/user')) {
    console.log(`Logging pageview for ${url}`)
    ReactGA.set({ page: url })
    ReactGA.pageview(url)
  }
}

export const logEvent = (category = '', action = ''): void => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false): void => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
