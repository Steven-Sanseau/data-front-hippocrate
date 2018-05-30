import { ApolloLink } from 'apollo-client-preset'
import { ApolloClient } from 'apollo-client'
// Importing `isomorphic-unfetch` due to `apollo-link-http` raising
// a warning of not having `fetch` globally available.
// @see https://github.com/apollographql/apollo-link/issues/493
import 'isomorphic-unfetch'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: `${process.env.API_URL}/graphql` })

// Disable cache so it reflects the updates
// If you're just displaying data and not mutating them you can remove it
// to increase performances
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client
