const shopReducer =(list, action)=> {
    switch(action.type) {
        case 'render_list': {
            return action.message;
        }
        case 'add_to_wishlist': {
            return [...list,action.message]
        }
    default: {
        return list;
    }
}
}

export default shopReducer;