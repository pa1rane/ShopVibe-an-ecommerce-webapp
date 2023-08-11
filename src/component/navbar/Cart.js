import React, { useContext, useState} from 'react';
import { ShopContext } from '../../App';

const Cart = () => {

const [state , dispatch] = useContext(ShopContext);
const [input, setInput] = useState(1);

let cartItems = [];
cartItems = state.cart;

const handleQuantity = (e) => {
  const inputVal = e.target.value;
  if (inputVal >= 1 && inputVal <= 100)
  setInput( e.target.value)
}

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className='flex flex-wrap flex-col justify-center items-center m-10'>
        {cartItems.map((item) => (
            <div className='flex justify-between' key={item.id}>
            <div>
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
            </div>
            <div>
                <input 
                type="number" 
                value={input} 
                className='w-20 border border-black-500 '
                onChange={handleQuantity}
                 />
                 <div>
                 <p>Amount</p>
                 <p>{item.price.toFixed(0) * input}</p>
                 </div>
            </div>
            
            </div>
        ))}
      </div>
    </>
  )
}

export default Cart
