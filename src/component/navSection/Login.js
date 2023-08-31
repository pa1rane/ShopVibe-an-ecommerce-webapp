import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login = () => {
    const {loginWithRedirect} = useAuth0();
  return (
    <>
       <button onClick={()=> loginWithRedirect()}
       className='text-[#ffff] hover:text-[#fca71e] font-semibold transition-colors'>
        Log In
       </button>
    </>
  )
}

export default Login
