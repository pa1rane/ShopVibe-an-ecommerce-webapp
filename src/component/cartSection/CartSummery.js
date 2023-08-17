import React from 'react';

const CartSummery = ({subTotal}) => {

    const shippingCharge = subTotal > 500 ? "Free" : 10;
    const total = shippingCharge !== "Free" ? shippingCharge + subTotal: subTotal;
  return (
    <div className="bg-white p-4 rounded shadow-md sticky">
      <p className="text-lg font-semibold mb-1">Cart Summary</p>
      <p className='text-red-600 font-bold mb-4'>{subTotal < 500 ? "(Shop For 500 or More To Get FREE Delivery)" : ""}</p>
      <div className="mb-4">
        <p className="text-gray-600">Subtotal</p>
        <p>${+(subTotal.toFixed(2))}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Shipping</p>
        <p>${shippingCharge}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Total</p>
        <p>${+(total.toFixed(2))}</p>
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
