import React, { useState } from 'react';
import { setToken } from '../../utils';


function Login({setUserToken}) {
  const [tokenInput, setTokenInput] = useState('');

  // Submitting Form
  const submitToken = e => {
    e.preventDefault();
    // Set Token to localeStorage
    setToken(tokenInput);
    // Set Token to parent component to render repositories
    setUserToken(tokenInput);
  }

  return (
    <main className="login fadeIn">
      <div className="login-inner">
        <h1 className="login-title">Trendy Github Repositories</h1>
        <p className="login-desc">See all Trending Github Repositories according to stars, date range and more !</p>
        <form className="login-form" onSubmit={submitToken}>
          <span className="login-note">* Personal Access Token required. <a href="https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql" rel="noopener noreferrer" target="_blank">Check How To!</a></span>
          <input
            autoFocus
            className="login-form_input"
            type="password"
            placeholder="Enter your Personal Access Token"
            value={tokenInput}
            onChange={e => setTokenInput(e.currentTarget.value)}
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Login;