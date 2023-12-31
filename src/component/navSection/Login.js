import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Login = () => {
    const {loginWithRedirect} = useAuth0();
  return (
    <>
       <button onClick={()=> loginWithRedirect()}
       className='text-[#ffff] hover:bg-[#E87613] bg-[#FF9B21] py-1 px-5 rounded-md font-semibold transition-colors'>
        Log In
       </button>
    </>
  )
}

export default Login
