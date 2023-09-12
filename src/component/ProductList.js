import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../App";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ products }) => {
  const [, dispatch] = useContext(ShopContext);
 
  const showCartToast = () => {
    toast.success("Item Successfully Added To The Cart", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        backgroundColor:"#20a2b6",
        color:"#ffff",
        borderRadius:"10px",
      }
    })
  }
  const showWishlistToast = () => {
    toast.success("Item Successfully Added To The Wishlist", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        backgroundColor:"#ea54a2",
        color:"#ffff",
        borderRadius:"10px",
      }
    })
  } 

  return (
    <div className="flex flex-wrap h-screen w-screen
     overflow-x-hidden justify-center items-center p-8">
      {products.map((li) => (
        <div
          className="border-2 border-black md:h-[400px] md:w-[250px]
          h-[300px] w-[175px]
           p-4 m-4 flex flex-col items-center justify-between 
           transition-transform duration-300 transform group
           bg-[#ffff] shadow-md rounded-md"
          key={li.id}
        >
          <Link
            className="md:w-full md:h-[60%] w-20 flex justify-center items-center hover:opacity-75"
            to={`/products/${li.id}`}
          >
            <img
              src={li.image}
              alt={li.title}
              className="max-h-[160px] object-contain"
            />
          </Link>
          <p className="md:text-base font-semibold text-sm">
            {li.title.length > 40 ? li.title.slice(0, 40) + "..." : li.title}
            </p>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <p className="md:text-lg text-md font-bold mr-5">${li.price}</p>
            <div className="flex md:flex-col gap-2">
              <button
                type="button"
                className="hover:opacity-75 rounded-md bg-[#ea54a2] text-[#ffff]
                 md:text-sm text-xs font-semibold p-1 md:w-36 w-20"
                onClick={() => {
                  showWishlistToast();
                  dispatch({ type: "add_to_wishlist", message: li });
                }}
              >
                WISHLIST
              </button>
              <button
                type="button"
                className="hover:opacity-75 rounded-md bg-[#20a2b6] text-[#ffff] md:text-sm text-xs md:w-36 w-20 font-semibold p-1.5"
                onClick={() => { 
                  showCartToast();
                  dispatch({ type: "add_to_cart", message: li })
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
      autoClose={2000}
      theme="colored"/>
    </div>
  );
};

export default ProductList;
