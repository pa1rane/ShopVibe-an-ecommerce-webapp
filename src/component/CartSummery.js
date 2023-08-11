import React from 'react';

const CartSummery = ({amounts}) => {
  return (
    <div className='flex flex-col ml-10 border border-red-500'>
    
      <h3 className='text-center'>Cart Summery</h3>
      <div>
      <p>Subtotal <span>{amounts}</span></p>
      <p>Shipping <span>FREE</span></p>
      </div>
      <p>Total</p>
      <input type="button" value="Checkout"/>
    </div>
  )
}

export default CartSummery
