import React, { useContext } from "react";
import { ShopContext } from "../../App";
import CartSummery from "./CartSummery";
import CartList from "./CartList";

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
    console.log(itemToMove)
  };
  
  const subTotalOfCartItems = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity
  }, 0)

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md flex">
      <div className="flex-grow pr-4">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        <CartList
          cartItems={cartItems}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRemoveItem={handleRemoveItem}
          handleMoveToWishlist={handleMoveToWishlist}
        />
      </div>
      <div className="w-1/3 ml-4 mt-11 sticky">
        <CartSummery subTotal={subTotalOfCartItems}/>
      </div>
    </div>
  );
};

export default Cart;
