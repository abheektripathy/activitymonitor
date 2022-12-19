import { AppProps } from 'next/app'
import '../styles/globals.css'

import { MantineProvider } from '@mantine/core'
import { ApplicationContainer } from '../components/ApplicationContainer'

export default function App({ //@ts-ignore
  Component, pageProps }) {
  return <MantineProvider 
    withNormalizeCSS
    withGlobalStyles 
    theme={{ colorScheme: 'dark' }}  
  >
    <ApplicationContainer>
    <Component {...pageProps} />
    </ApplicationContainer>
  </MantineProvider>
}
