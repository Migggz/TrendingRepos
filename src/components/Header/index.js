import React from 'react';
import { removeToken } from '../../utils';

function Header({setUserToken, viewer: {name, avatarUrl, url}}) {
  const logoutHandler = () => {
    // Remove Token from localStorage
    removeToken();
    // Remove Token from parent component and render login page
    setUserToken('');
  }

  return (
    <header className="header fadeIn">
      <div className="container">
        <div className="header-inner">
          <a href={url} className="header-user" rel="noopener noreferrer" target="_blank">
            <img className="header-user_img" src={avatarUrl} alt={name} />
            <span className="header-user_name">{name}</span>
          </a>
          <button type="button" className="submit-btn submit-btn--inverse" onClick={logoutHandler}>Logout</button>
        </div>
      </div>
    </header>
  )
}

export default Header;