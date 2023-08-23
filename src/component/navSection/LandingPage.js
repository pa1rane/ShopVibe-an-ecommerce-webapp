import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

const LandingPage = () => {

 const {isAuthenticated} = useAuth0();
     if (isAuthenticated) {
  return <Logout/>
     }
     return <Login/>
}

export default LandingPage
