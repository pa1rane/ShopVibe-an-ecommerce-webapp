import React, { useContext, useState} from 'react';
import { ShopContext } from '../../App';
import ItemQuantity from './ItemQuantity';
import CartSummery from './CartSummery';


const Cart = () => {

const [state , dispatch] = useContext(ShopContext);

let cartItems = [];
cartItems = state.cart;

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className='flex flex-wrap justify-center items-center m-10'>
        {cartItems.map((item) => (
            <div className='flex justify-between' key={item.id}>
            <div>
            <img src={item.image} alt={item.title}
            className="max-h-[160px] object-contain" />
            </div>
            <div className='flex flex-col m-5 p-5'>
            <p className='text-xs '>{item.title}</p>
            <p className='mt-5'>${item.price}</p>
            <div className='mt-5'> 
            <button
               type="button" 
               className="hover:opacity-75"
               onClick={() => {
                dispatch({type:"remove_from_cart", message: item});
               }}
               >
                Remove
              </button>
            <button
                type="button"
                className="hover:opacity-75 ml-5"
                onClick={() => {
                  dispatch({ type: 'add_to_wishlist', message: item });
                }}
              >
                Move to Wishlist
              </button>

            </div>
            </div>
            <ItemQuantity itemPrice={item.price}/>
            </div>
        ))}
          <CartSummery/>
      </div>
    </>
  )
}

export default Cart
