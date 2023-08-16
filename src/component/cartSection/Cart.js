import React, { useContext} from 'react';
import { ShopContext } from '../../App';
import CartQuantity from './CartQuantity';
import CartSummery from './CartSummery';

const Cart = () => {
  const [state, dispatch] = useContext(ShopContext);

  let cartItems = [...state.cart];

  const handleIncrement = (id) => {
      const updateCartQuantity = cartItems.map((item) => {
        if(item.product.id === id && item.quantity < 10) {
            return {...item, quantity: item.quantity + 1};
        }
        return item
      })

      dispatch({type: "update_cart_quantity", message: updateCartQuantity})
  }
  const handleDecrement = (id) => {
     const updateCartQuantity = cartItems.map((item) => {
        if (item.product.id === id && item.quantity > 1) {
            return {...item, quantity: item.quantity - 1};
        }
        return item
     })
     dispatch({type: "update_cart_quantity", message: updateCartQuantity})
  }


  return (
    <div className="bg-gray-100 p-4 rounded shadow-md flex">
      <div className="flex-grow pr-4">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center bg-white p-4 rounded shadow border">
              <div className="flex items-center flex-grow">
                <img src={item.product.image} alt={item.product.title} className="w-20 h-20 object-contain mr-4" />
                <div>
                  <p className="text-base font-semibold mb-1">{item.product.title}</p>
                  <p className="text-gray-600">${item.product.price}</p>
                  <div className="mt-2 space-x-2">
                    <button
                      type='button'
                      className="px-2 py-1 text-sm
                       text-white
                       bg-red-500 rounded 
                       hover:bg-red-600 
                       focus:outline-none 
                       focus:ring 
                       focus:ring-red-300"
                    >
                      Remove
                    </button>
                    <button
                      type='button'
                      className="px-2 py-1 text-sm 
                      text-white 
                      bg-blue-500 rounded 
                      hover:bg-blue-600 
                      focus:outline-none 
                      focus:ring 
                      focus:ring-blue-300"
                    >
                      Move To Wishlist
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
      </div>
      <div className="w-1/3 ml-4 mt-11 sticky">
        <CartSummery />
      </div>
    </div>
  );
}

export default Cart;

