import React from 'react';
import GitHubLogin from 'github-login';
import { setToken } from '../../utils';

const onSuccess = ({code: token}) => {
  console.log(token);
  setToken(token);
  window.location.reload();
};
const onFailure = response => console.log(response);

function Login() {
  return (
    <main className="login">
      <div className="login-inner">
        <h1 className="login-title">Trendy Github Repositories</h1>
        <p className="login-desc">See all Trending Github Repositories according to stars, date range and more !</p>
        <span className="login-note">* Login required. Don't worry, There is no <code>write</code> access</span>
        <GitHubLogin
          clientId={process.env.REACT_APP_GITHUB_APP_OAUTH}
          redirectUri={process.env.NODE_ENV === 'development' ? 'https://localhost:3000/' : 'https://trendinghub.magedmohamed.me'}
          scope="user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key"
          buttonText="Signin with Github"
          className="login-cta"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    </main>
  );
}

export default Login;