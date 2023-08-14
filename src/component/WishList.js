import React, {useContext} from 'react';
import { ShopContext } from '../App';

const WishList = () => {
 
  const [state,] = useContext(ShopContext);
  const addToWishlist = [ ...state.wishlist];

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
