import { AppProps } from 'next/app'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || '' })
  }, [])
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
