import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";

const ProductList = ({ products }) => {
  const [, dispatch] = useContext(ShopContext);

  return (
    <div className="flex flex-wrap h-screen w-screen
     overflow-x-hidden justify-center items-center p-8">
      {products.map((li) => (
        <div
          className="border-2 border-black h-[400px] w-[250px]
           p-4 m-4 flex flex-col items-center justify-between 
           transition-transform duration-300 transform group
           bg-[#ffff] shadow-md rounded-md"
          key={li.id}
        >
          <Link
            className="w-full h-[60%] flex justify-center items-center hover:opacity-75"
            to={`/products/${li.id}`}
          >
            <img
              src={li.image}
              alt={li.title}
              className="max-h-[160px] object-contain"
            />
          </Link>
          <p className="text-base font-semibold mt-4">{li.title}</p>
          <div className="flex justify-between mt-2">
            <p className="text-lg font-bold mr-5">${li.price}</p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="hover:opacity-75 rounded-md bg-[#ea54a2] text-[#ffff] text-sm font-semibold p-1"
                onClick={() => {
                  dispatch({ type: "add_to_wishlist", message: li });
                }}
              >
                WISHLIST
              </button>
              <button
                type="button"
                className="hover:opacity-75 rounded-md bg-[#21d0eb] text-[#ffff] text-sm font-semibold p-1.5"
                onClick={() => {
                  dispatch({ type: "add_to_cart", message: li });
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
