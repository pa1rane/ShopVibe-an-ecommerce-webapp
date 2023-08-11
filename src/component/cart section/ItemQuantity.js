import React, { useState } from 'react'

const ItemQuantity = ({itemPrice}) => {

  const [input, setInput] = useState(1);
  const [amount, setAmount]= useState(itemPrice)

  const handleQuantity = (e) => {
    const quantityLimit = e.target.value;
    if (quantityLimit >= 0 && quantityLimit <=100)
    setInput(quantityLimit)
  }

  const handleAmount =() => {
    const calAmount = input * itemPrice.toFixed(0);
    setAmount(calAmount)
  }

  return (
    <div className='flex flex-col'>
      <input type="number" 
      value={input} 
      onChange={handleQuantity}
      onClick={handleAmount}
      className='border border-black-500 w-20 h-10'
      />
      <p>Amount</p>
      <p>${amount}</p>
    </div>
  )
}

export default ItemQuantity
