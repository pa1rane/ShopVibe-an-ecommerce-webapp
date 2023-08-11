const shopReducer =(state, action)=> {
    switch(action.type) {
        case 'render_list': {
            return {...state, list :[...state.list, ...action.message]};
        }
        case 'add_to_wishlist': {
            return {...state, wishlist:[...state.wishlist,action.message]}
        }
        case 'add_to_cart': {
            return {...state, cart:[...state.cart, action.message]}
        }
    default: {
        return state;
    }
}
}

export default shopReducer;