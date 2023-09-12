import React from 'react';
import CartQuantity from './CartQuantity';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartList = ({cartItems,handleDecrement, handleIncrement, handleRemoveItem, handleMoveToWishlist,showMovedToWishlistToast,showRemovedToast}) => {

  return (
    <div className="grid gap-4">
      <ToastContainer
      autoClose={2000}
      theme='colored'
      />
    {cartItems.map((item) => (
      <div key={item.product.id} className="flex items-center bg-white p-4 rounded shadow border">
        <div className="flex items-center flex-grow">
          <img src={item.product.image} alt={item.product.title} className="w-20 h-20 object-contain mr-4" />
          <div>
            <p className="text-base font-semibold mb-1">{item.product.title}</p>
            <p className="text-gray-600">${+(item.product.price * item.quantity).toFixed(2)}</p>
            <div className="mt-2 flex flex-col md:flex-row">
              <button
                type='button'
                onClick={() =>{
                  showRemovedToast();
                  handleRemoveItem(item.product.id)}}
                className="px-2 py-1 text-sm mx-2 my-1
                w-20 md:w-auto
                 text-white
                 bg-[#ea54a2]
                 rounded-md 
                 hover:opacity-75
                 font-semibold
                 focus:outline-none"
              >
                Remove
              </button>
              <button
                type='button'
                onClick={() =>{
                  showMovedToWishlistToast();
                  handleMoveToWishlist(item.product.id)}}
                className="px-2 py-1 text-sm mx-2 my-1
                w-20 md:w-auto
                text-white 
                bg-[#20a2b6] 
                hover:opacity-75
                rounded-md
                font-semibold 
                focus:outline-none"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
        <CartQuantity 
        quantity={item.quantity} 
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        id = {item.product.id}
        />
      </div>
    ))}
  </div>
  )
}

export default CartList;
