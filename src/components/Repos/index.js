import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from '../Header';

function Repos({AUTH_TOKEN}) {
  
  const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_BASE_URI,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  });
  
  return (
    <ApolloProvider client={apolloClient}>
      <main>
        <Header />
      </main>
    </ApolloProvider>
  );
}

export default Repos;