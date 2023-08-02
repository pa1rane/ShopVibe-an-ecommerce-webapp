import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className='w-full  h-10 flex items-center justify-between' >
      <div className="flex gap-20">
      <h3 className='ml-10 hover:cursor-pointer'>ShopVibe</h3>
      <ul className='flex gap-10'>
       <li className='hover:cursor-pointer'>Home</li>
       <li className='hover:cursor-pointer'>About</li>
       <li className='hover:cursor-pointer'>Products</li>
      </ul>
      </div>

      <div className="right">
      <ul className="flex mr-10 gap-10 className='hover:cursor-pointer'">
       <li className='hover:cursor-pointer'>WishList</li>
       <li className='hover:cursor-pointer'>Cart</li>
       <li className='hover:cursor-pointer'>User</li>
      </ul>
      </div>
      </div>
    </>
  )
}

export default Navbar
