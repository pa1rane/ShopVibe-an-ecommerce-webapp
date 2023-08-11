import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../App';

const ProductList = ({ products }) => {
  const [, dispatch] = useContext(ShopContext);

  return (
    <div className="flex flex-wrap h-screen w-screen overflow-x-hidden justify-center items-center p-8">
      {products.map((li) => (
        <div
          className="border border-[#e4e4e4] h-[400px] w-[250px] p-4 mb-8 flex flex-col items-center justify-between transition-transform duration-300 transform group"
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
            <div className="flex flex-col">
              <button
                type="button"
                className="btn-wishlist hover:opacity-75"
                onClick={() => {
                  dispatch({ type: 'add_to_wishlist', message: li });
                }}
              >
                WISHLIST
              </button>
              <button
               type="button" 
               className="btn-add-to-cart hover:opacity-75"
               onClick={() => {
                dispatch({type:"add_to_cart", message: li});
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

