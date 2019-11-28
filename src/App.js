import React, { useState } from 'react';
import Login from './components/Login'
import { getToken } from './utils';
import Repos from './components/Repos';

function App() {
  // Check whether Access Token is exist in localStorage or not
  const [userToken, setUserToken] = useState(getToken());
  return userToken ? <Repos AUTH_TOKEN={userToken} setUserToken={setUserToken} /> : <Login setUserToken={setUserToken} />
}

export default App;