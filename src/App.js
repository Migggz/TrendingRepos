import React, { Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <h1>Hello, I'm using Apollo Provider!</h1>
      </Fragment>
    </ApolloProvider>
  );
}

export default App;
