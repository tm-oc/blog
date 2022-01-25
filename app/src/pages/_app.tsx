import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || '' })
  }, [])
  return (
    <>
      <NextNprogress
        color='#4c51bf'
        startPosition={0.1}
        stopDelayMs={0}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
