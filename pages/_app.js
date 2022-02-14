import '../styles/index.css'
import { useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import Page from '../components/SegmentPageTracker'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove('prevent-scroll')
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, []) // eslint-disable-line

  const [favicon, setFavicon] = useState('/favicon_system.svg')

  useEffect(() => {
    const onChange = (event) => {
      setFavicon(`/favicon_${event.matches ? 'dark' : 'light'}.svg`)
    }
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    if (query.addEventListener) {
      query.addEventListener('change', onChange)
    }
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes('#')) {
      setTimeout(() => {
        const scrolled = document.documentElement.scrollTop !== 0
        if (scrolled) return

        const id = path.replace('#', '')
        const el = window.document.getElementById(id)
        if (!el) return

        const r = el.getBoundingClientRect()
        window.top.scroll({
          top: scrollY + r.top - 100, // 100 for page header height
          behavior: 'smooth'
        })
      }, 600)
    }
  }, [])

  const styles = {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'gray.100')(props),
        bg: mode('white', 'gray.900')(props),
      },
    }),
  };

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  }



  const theme = extendTheme({
    styles,
    config
  });

  return (
    <ChakraProvider theme={theme}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  )
}

export default App
