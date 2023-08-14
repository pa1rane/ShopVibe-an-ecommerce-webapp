const shopReducer =(state, action)=> {
    switch(action.type) {
        case 'render_list': {
            return {...state, list :[...state.list, ...action.message]};
        }
        case 'add_to_wishlist': {
            const productExistsInWishlist = state.wishlist.find((item) => item.id === action.message.id)
            if (productExistsInWishlist) {
                return state
            }
            return {...state, wishlist:[...state.wishlist,action.message]}
        }
        case 'add_to_cart': {
            const productExistsInCart = state.cart.find((item) => item.id === action.message.id);
            if (productExistsInCart) {
                return state
            }
            return {...state, cart:[...state.cart, action.message]}
        }
    default: {
        return state;
    }
}
}

export default shopReducer;