import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
 
    const {logout} = useAuth0();

  return (
    <>
      <button
      onClick={() => logout()}
      className='text-[#ffff] hover:bg-[#E87613] bg-[#FF9B21] py-1 px-5 rounded-md font-semibold transition-colors'>
        Log Out
      </button>
    </>
  )
}

export default Logout
