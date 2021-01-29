import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const graphqlClient = new ApolloClient({
  uri: `${process.env.GRAPH_URI}`,
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
})

function Earth({ Component, pageProps }) {
  const router = useRouter()
  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.code === 'KeyR' && !e.ctrlKey) router.push('/')
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent)

    return () => window.removeEventListener('keydown', handleKeyEvent)
  }, [])
  return (
    <ApolloProvider client={graphqlClient}>
      <main>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  )
}

export default Earth
