const shopReducer = (state, action) => {
  switch (action.type) {
    case "render_list": {
      return { ...state, list: [...state.list, ...action.message] };
    }

    case "add_to_wishlist": {
      const productExistsInWishlist = state.wishlist.find(
        (item) => item.id === action.message.id
      );
      if (productExistsInWishlist) {
        return state;
      }
      return { ...state, wishlist: [...state.wishlist, action.message] };
    }

    case "add_to_cart": {
      const productExistsInCart = state.cart.find(
        (item) => item.product.id === action.message.id
      );
      if (productExistsInCart) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.message, quantity: 1 }],
      };
    }

    case "update_cart" : {
        return {...state, cart: action.message};
    }

    case "update_cart_item_quantity": {
      const updatedCart = state.cart.map((item) => {
        const updatedCartItem = action.message.find(
          (updatedItem) => updatedItem.product.id === item.product.id
        );
        if (updatedCartItem) {
          return { ...item, quantity: updatedCartItem.quantity };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    }

    case "move_to_wishlist" : {
        const itemRemove = state.cart.filter((item) => {
            return item.product.id !== action.message.product.id
        })
        const addIntoWishlist = state.cart.find((item) => {
            return item.product.id === action.message.product.id
        })

        const updatedWishlist = [...state.wishlist, {...addIntoWishlist.product}]
        return {...state, cart: itemRemove, wishlist: updatedWishlist}
    }

    default: {
      return state;
    }
  }   
};

export default shopReducer;
