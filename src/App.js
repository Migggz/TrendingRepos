import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Login from './components/Login'
import { getToken } from './utils';

const AUTH_TOKEN = getToken();

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_BASE_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`
  }
});


function App() {
  return (
    AUTH_TOKEN ?
      <ApolloProvider client={apolloClient}>
        <main>
          <h1>Hello, I'm using Apollo Provider!</h1>
        </main>
      </ApolloProvider>
    :
    <Login />
  );
}

export default App;