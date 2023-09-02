import React, { useContext } from "react";
import { ShopContext } from "../../App";
import CartSummery from "./CartSummery";
import CartList from "./CartList";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [state, dispatch] = useContext(ShopContext);

  const cartItems = [...state.cart];

  const handleIncrement = (id) => {
    const updateCartQuantity = cartItems.map((item) => {
      if (item.product.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    dispatch({ type: "update_cart_item_quantity", message: updateCartQuantity });
  };

  const handleDecrement = (id) => {
    const updateCartQuantity = cartItems.map((item) => {
      if (item.product.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    dispatch({ type: "update_cart_item_quantity", message: updateCartQuantity });
  };

  const handleRemoveItem = (id) => {
    const itemRemoved = cartItems.filter((item) => {
        return item.product.id !== id
    })
    dispatch({type:"update_cart", message:itemRemoved })
  }

  const handleMoveToWishlist = (id) => {
    const itemToMove = cartItems.find((item) => item.product.id === id);
    if (itemToMove) {
      dispatch({ type: "move_to_wishlist", message: itemToMove });
    }
  };
  
  const subTotalOfCartItems = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity
  }, 0)

  const showRemovedToast = () => {
    toast.success("Item Successfully Removed From The Cart", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        backgroundColor:"#ea54a2",
        color:"#ffff",
        borderRadius:"10px",
      }
    })
  }
  const showMovedToWishlistToast = () => {
    toast.success("Item Successfully Moved To The Wishlist", {
      position: toast.POSITION.TOP_CENTER,
      style: {
        backgroundColor:"#20a2b6",
        color:"#ffff",
        borderRadius:"10px",
      }
    })
  }

  if(cartItems.length === 0) {
    return (
      <div className="bg-[#9466c6] min-h-[90vh] flex justify-center items-center"> 
      <ToastContainer
      autoClose={2000}
      theme="colored"/>
        <p className='text-4xl font-semibold text-[#ffff] font-mono'>Cart Is Empty</p>
      </div>
    )
  }

  return (
    <div className="bg-[#9466c6] p-4 rounded shadow-md flex">
      <ToastContainer
      autoClose={2000}
      theme="colored"/>
      <div className="flex-grow pr-4">
        <h2 className="text-2xl font-semibold font-mono mb-4 text-[#ffff]">Shopping Cart</h2>
        <CartList
          cartItems={cartItems}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRemoveItem={handleRemoveItem}
          handleMoveToWishlist={handleMoveToWishlist}
          showMovedToWishlistToast={showMovedToWishlistToast}
          showRemovedToast={showRemovedToast}
        />
      </div>
      <div className="w-1/3 ml-4 mt-12">
        <CartSummery subTotal={subTotalOfCartItems}/>
      </div>
    </div>
  );
};

export default Cart;
