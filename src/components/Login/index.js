import React, { useState } from 'react';
import { setToken } from '../../utils';


function Login({setUserToken}) {
  const [tokenInput, setTokenInput] = useState('');

  const submitToken = e => {
    e.preventDefault();
    setToken(tokenInput);
    setUserToken(tokenInput);
  }

  return (
    <main className="login">
      <div className="login-inner">
        <h1 className="login-title">Trendy Github Repositories</h1>
        <p className="login-desc">See all Trending Github Repositories according to stars, date range and more !</p>
        <form className="login-form" onSubmit={submitToken}>
          <input
            className="login-form_input"
            type="password"
            placeholder="Enter your Personal Access Token"
            value={tokenInput}
            onChange={e => setTokenInput(e.currentTarget.value)}
          />
          <button type="submit" className="login-form_submit">Submit</button>
        </form>
      </div>
      {/* <div className="login-inner">
        <h1 className="login-title">Trendy Github Repositories</h1>
        <span className="login-note">* Login required. Don't worry, There is no <code>write</code> access</span>

        <form onSubmit={submitToken}>
          <input
            type="text"
            placeholder="Enter your Personal Access Token"
            value={tokenInput}
            onChange={e => setTokenInput(e.currentTarget.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </main>
  );
}

export default Login;