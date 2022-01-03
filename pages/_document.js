/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/icon-192x192.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/icon-256x256.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="384x384"
            href="/icon-384x384.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icon-512x512.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="preload"
            href="https://kmcstorage1.blob.core.windows.net/project-statics/PROXIMANOVA-REGULAR.OTF"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="https://kmcstorage1.blob.core.windows.net/project-statics/PROXIMANOVA-SEMIBOLD.OTF"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="https://kmcstorage1.blob.core.windows.net/project-statics/PROXIMANOVA-EXTRABOLD.OTF"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
