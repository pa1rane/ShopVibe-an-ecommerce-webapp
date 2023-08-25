import React from 'react';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import {BsCartCheckFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const Navbar = () => {
  return (
    <div className='w-full  h-10 flex items-center justify-between bg-[#EADBC8] py-8' >
      <div className="flex gap-20">
      <h3 className='ml-10 hover:cursor-pointer'>ShopVibe</h3>
      <ul className='flex gap-10'>
     <Link to="/"><li className='hover:cursor-pointer'>Home</li></Link> 
       <li className='hover:cursor-pointer'>About</li>
     <Link to="/products"><li className='hover:cursor-pointer'>Products</li></Link>  
      </ul>
      </div>  

      <div className="right">
      <div className="flex items-center mr-10 gap-10">
      <Link to="/wishlist"><BsFillBookmarkHeartFill className={`hover:cursor-pointer w-6 h-5`}/></Link> 
     <Link to="/cart"><BsCartCheckFill className={`hover:cursor-pointer w-6 h-6`}/></Link>
      <UserProfile className={`hover:cursor-pointer w-6 h-6`}/>
      </div>   
      </div>
      </div>
  )
}
export default Navbar;