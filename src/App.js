import React, { Fragment } from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Test from './components/Test';


const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const client = new ApolloClient({
  uri: GITHUB_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
  }
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <h1>Hello, I'm using Apollo Provider!</h1>
        <Test />
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
