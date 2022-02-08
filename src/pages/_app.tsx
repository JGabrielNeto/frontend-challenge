import "../styles/globals.sass"
import type { AppProps } from 'next/app'
import { ValuesProvider } from "../hooks/ValuesContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ValuesProvider>
        <Component {...pageProps} />
      </ValuesProvider>  
    </>   
  )
}

export default MyApp
