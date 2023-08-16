import React from "react";

const CartQuantity = ({quantity, handleDecrement, handleIncrement, id}) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-base font-semibold mb-1">Quantity</p>
        <div className="flex space-x-2">
          <button
            type="button"
            className="px-2 py-1 text-sm 
                  bg-gray-300 rounded"
                  onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <p className="text-lg font-semibold">{quantity}</p>
          <button
            type="button"
            className="px-2 py-1 text-sm 
                  bg-gray-300 rounded"
                  onClick={() => handleIncrement(id)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartQuantity;
