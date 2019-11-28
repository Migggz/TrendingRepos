import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Header from '../Header';
import Loading from '../Loading';
import ErrorComponent from '../ErrorComponent'

// Get User Profile & Check if Access Token works fine
const PROFILE = gql`
  {
    viewer{
      name
      avatarUrl
      url
    }
  }
`;

function ReposInner({setUserToken, children}) {
  const { loading, error, data } = useQuery(PROFILE);

  if (loading) return <Loading />
  if (error) return <ErrorComponent />;

  const { viewer } = data;
    
  return (
    <main>
      <Header viewer={viewer} setUserToken={setUserToken} />
      {children}
    </main>
  )
}

export default ReposInner;