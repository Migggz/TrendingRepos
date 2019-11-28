import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ReposInner from '../ReposInner';
import TrendRepos from '../TrendRepos'
import Footer from '../Footer'


function Repos({AUTH_TOKEN, setUserToken}) {
  
  // Configure Apollo Client
  const apolloClient = new ApolloClient({
    uri: process.env.REACT_APP_GITHUB_BASE_URI,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  });
  
  return (
    <ApolloProvider client={apolloClient}>
      <ReposInner setUserToken={setUserToken} className="repos">
        <TrendRepos />
        <Footer />
      </ReposInner>
    </ApolloProvider>
  );
}

export default Repos;