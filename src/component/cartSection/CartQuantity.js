import React from "react";

const CartQuantity = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-base font-semibold mb-1">Quantity</p>
        <div className="flex space-x-2">
          <button
            type="button"
            className="px-2 py-1 text-sm 
                  bg-gray-300 rounded"
          >
            -
          </button>
          <p className="text-lg font-semibold">1</p>
          <button
            type="button"
            className="px-2 py-1 text-sm 
                  bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartQuantity;
