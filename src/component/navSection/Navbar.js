// import React from 'react';
// import {BsFillBookmarkHeartFill} from 'react-icons/bs';
// import {BsCartCheckFill} from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import UserProfile from './UserProfile';

// const Navbar = () => {
//   return (
//     <div className='w-full  min-h-[10vh] flex items-center justify-between bg-[#4E148C] py-4 sticky top-0 z-10' >
//       <div className="flex gap-20">
//       <h3 className='ml-10 font-bold font-mono hover:cursor-pointer text-[#ffff] text-2xl' >ShopVibe</h3>
//       <ul className='flex gap-10 text-[#ffff] items-center'>
//      <Link to="/">
//      <li className='hover:cursor-pointer hover:text-[#20a2b6] font-semibold transition-colors'>Home</li>
//       </Link>
//       <Link to="/products">
//       <li className='hover:cursor-pointer hover:text-[#20a2b6] font-semibold transition-colors'>Products</li>
//       </Link>
//       <Link to="/about">
//        <li className='hover:cursor-pointer hover:text-[#20a2b6] font-semibold transition-colors'>About</li>
//        </Link>   
//       </ul>
//       </div>  
  
//       <div className="right">
//       <div className="flex items-center mr-10 gap-10">
//       <Link to="/wishlist">
//         <BsFillBookmarkHeartFill className={`hover:cursor-pointer hover:text-[#20a2b6] font-semibold transition-colors w-6 h-5 text-[#ffff]`}/>
//         </Link> 
//      <Link to="/cart">
//       <BsCartCheckFill className={`hover:cursor-pointer hover:text-[#20a2b6] font-semibold transition-colors w-6 h-6 text-[#ffff]`}/>
//       </Link>
//       <UserProfile className="hover:cursor-pointer w-6 h-6 text-[#ffff]"/>
//       </div>   
//       </div>
//       </div>
//   )
// }
// export default Navbar;


import React, { useState } from 'react';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import {BsCartCheckFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import './navbar.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='navbar' >
      <h3 className='logo' >ShopVibe</h3>
      <div className='menuIcon'>
      <GiHamburgerMenu onClick={handleMenu}/>
      </div>
      <nav className={isMenuOpen ? 'menuOpen' : 'menuClose'}>
      <ul className='leftNavList'>
     <Link to="/">
     <li className='home'>Home</li>
      </Link>
      <Link to="/products">
      <li className='products'>Products</li>
      </Link>
      <Link to="/about">
       <li className='about'>About</li>
       </Link>   
      </ul>
      <div className="rightNavList">
      <Link to="/wishlist">
        <BsFillBookmarkHeartFill className="wishlist"/>
        </Link> 
     <Link to="/cart">
      <BsCartCheckFill className="cart"/>
      </Link>
      <UserProfile className="userLog"/>
      </div>
      </nav>
      </div>   
      

  )
}
export default Navbar;