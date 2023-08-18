import React, {useContext} from 'react';
import { ShopContext } from '../App';

const WishList = () => {
 
  const [state,] = useContext(ShopContext);
  const newWishlist = [ ...state.wishlist];
  console.log(newWishlist);

  return (
    <>
       <h1>Wishlist</h1>
       <div>
      {
        newWishlist.map((wishlist) => (
         <div key={wishlist.id} className='bg-red-600'>
           <p>{wishlist.title}</p>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default WishList
