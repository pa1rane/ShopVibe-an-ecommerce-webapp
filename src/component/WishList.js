import React, {useContext, useState} from 'react';
import { ShopContext } from '../App';

const WishList = () => {
 
  const [state,] = useContext(ShopContext);
  let addToWishlist = [];
  addToWishlist = state.wishlist;
  return (
    <>
       <h1>Wishlist</h1>
       <ul>
      {
        addToWishlist.map((li) => (
          <li key={li.id}>{li.title}</li>
        ))
      }
      </ul>
    </>
  )
}

export default WishList
