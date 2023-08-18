import React, {useContext} from 'react';
import { ShopContext } from '../App';

const WishList = () => {
 
  const [state, dispatch] = useContext(ShopContext);
  const newWishlist = [ ...state.wishlist];

  const handleWishlistItem = (id) => {
    const updateWishlist = newWishlist.filter((item) => {
        return item.id !== id
    })
    dispatch({type: "update_wishlist", message:updateWishlist})
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newWishlist.map((wishlist) => (
          <div key={wishlist.id} className="border border-gray-300 p-4 rounded-lg">
            <img src={wishlist.image} alt={wishlist.title} className="max-h-40 mx-auto mb-2" />
            <div className='flex flex-col justify-center items-center'>
            <p className="text-lg font-semibold">{wishlist.title}</p>
            <p className="text-gray-600">${wishlist.price}</p>
            <button 
            onClick={() => handleWishlistItem(wishlist.id)}
            className="mt-2 px-16 py-2 
            bg-red-500 
            text-white rounded 
            hover:bg-red-600">
              Remove
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList
