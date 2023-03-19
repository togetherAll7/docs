import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <link rel="preload" href="/fonts/inter-regular.woff2" as="font" crossOrigin="true" />
        <link rel="preload" href="/fonts/inter-medium.woff2" as="font" crossOrigin="true" />
        <link rel="preload" href="/fonts/inter-semibold.woff2" as="font" crossOrigin="true" />
        <link rel="preload" href="/fonts/inter-bold.woff2" as="font" crossOrigin="true" />
        <link rel="preload" href="/fonts/meslo.woff2" as="font" crossOrigin="" />
      </Head>
      <body tabIndex={-1}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
