import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
 
    const {logout} = useAuth0();

  return (
    <>
      <button
      onClick={() => logout()}
      className='text-[#ffff] hover:text-[#20a2b6] font-semibold transition-colors'>
        Log Out
      </button>
    </>
  )
}

export default Logout
