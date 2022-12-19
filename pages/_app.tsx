import { AppProps } from 'next/app'
import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'

export default function App({ //@ts-ignore
  Component, pageProps }) {
  return <MantineProvider 
    withNormalizeCSS
    withGlobalStyles 
    theme={{ colorScheme: 'dark' }}  
  >
    <Component {...pageProps} />
  </MantineProvider>
}
