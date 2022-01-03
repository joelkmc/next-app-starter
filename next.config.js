/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    APP_API_BASE_URL: process.env.APP_API_BASE_URL,
    E_SIGN_BASE_URL: process.env.E_SIGN_BASE_URL,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },

  images: {
    domains: [
      'kmcstorage1.blob.core.windows.net',
      'cdn.kmc.solutions',
      'images.unsplash.com',
    ],
  },

  reactStrictMode: true,

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
})
