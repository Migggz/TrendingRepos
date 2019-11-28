import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from '../Loading';
import Repository from '../Repository';
import { scroller, Element } from 'react-scroll';
import ErrorComponent from '../ErrorComponent';

// Get Top Repositories according to the most stars count
const REPOSITORIES = gql`
query LoadRepos($nextCursor: String, $prevCursor: String) {
  search(type: REPOSITORY, query: "stars:>0", last: 10, after: $nextCursor, before: $prevCursor) {
    repositoryCount
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        ... on Repository {
          nameWithOwner
          url
          primaryLanguage {
            name
            color
          }
          descriptionHTML
          forkCount
          updatedAt
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`;


function ReposInner() {
  const [fetchingRepos, setFetchingRepos] = useState(false);
  
  const { loading, error, data, fetchMore } = useQuery(REPOSITORIES, {
    variables: {
      nextCursor: null,
      prevCursor: null
    }
  });

  const onFetch = (cursor, type) => {
    setFetchingRepos(true);
    scroller.scrollTo('_scrollheader', {
      duration: 800,
      smooth: 'easeInOutQuint',
    });
    fetchMore({
      query: REPOSITORIES,
      variables: type === 'forward' ? { nextCursor: cursor, prevCursor: null } : { nextCursor: null, prevCursor: cursor },
      updateQuery: (previousResult, {fetchMoreResult}) => {
        setFetchingRepos(false);
        return {
          ...fetchMoreResult
        }
      }
    })
  }

  if (loading) return <Loading />
  if (error) return <ErrorComponent />;

  const { search: {repositoryCount, edges: reposArr, pageInfo: {hasPreviousPage, hasNextPage, endCursor, startCursor}} } = data;

  return (
    <section className="repos">
      <div className="container">
        <header className="repos-header">
          <Element name="_scrollheader">
            <h1 className="repos-title">Trending Repositories</h1>
          </Element>
          <span className="repos-header_count">Repositories Count: <b>{repositoryCount.toLocaleString()}</b></span>
        </header>
        <div className={`repos-wrapper ${fetchingRepos ? 'fetching-layer' : 'fadeIn'}`} >
          {reposArr.map(({node: { 
              nameWithOwner, 
              primaryLanguage, 
              descriptionHTML, 
              updatedAt, 
              forkCount,
              url,
              stargazers: {totalCount}
            }}, i) => (
              <Repository
                key={i} 
                url={url}
                name={nameWithOwner}
                description={descriptionHTML}
                language={primaryLanguage}
                updated={updatedAt}
                forkCount={forkCount}
                starCount={totalCount}
              />)
            )
          }
        </div>
        <div className="repos-actions">
          {hasPreviousPage && <button disabled={fetchingRepos} className="repos-actions_btn" type="button" onClick={() => onFetch(startCursor, 'backward')}>Go Back</button>}
          {hasNextPage && <button disabled={fetchingRepos} className="repos-actions_btn" type="button" onClick={() => onFetch(endCursor, 'forward')}>Load More</button>}
        </div>  
      </div>
    </section>
  )
}

export default ReposInner;