const shopReducer =(list, action)=> {
    switch(action.type) {
        case 'render_list': {
            return action.message;
        }
    default: {
        return list;
    }
}
}

export default shopReducer;