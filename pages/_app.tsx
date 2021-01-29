import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import '../styles/globals.css'

export const graphqlClient = new ApolloClient({
  uri: `${process.env.GRAPH_URI}`,
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
})

function Earth({ Component, pageProps }) {
  return (
    <ApolloProvider client={graphqlClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Earth
