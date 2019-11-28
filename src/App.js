import React, { useState } from 'react';
import Login from './components/Login'
import { getToken } from './utils';
import Repos from './components/Repos';

function App() {
  const [userToken, setUserToken] = useState(getToken());
  return userToken ? <Repos AUTH_TOKEN={userToken} setUserToken={setUserToken} /> : <Login setUserToken={setUserToken} />
}

export default App;