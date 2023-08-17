import React from 'react';

const CartSummery = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md sticky">
      <p className="text-lg font-semibold mb-4">Cart Summary</p>
      <div className="mb-4">
        <p className="text-gray-600">Subtotal</p>
        <p>$subtotal</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Shipping</p>
        <p>$Free</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Total</p>
        <p>$total</p>
      </div>
      <button
        type='button'
        className="w-full py-2 
        bg-blue-500 
        text-white rounded 
        hover:bg-blue-600 
        focus:outline-none 
        focus:ring 
        focus:ring-blue-300"
      >
        Checkout
      </button>
    </div>
  )
}

export default CartSummery;
