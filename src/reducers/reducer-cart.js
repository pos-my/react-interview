function reducer_cart(state=[],action){
    switch(action.type){
        case "CART_ADD":
            if (!(action.payload.id in state)){
                state[action.payload.id]=[];
            }
            if(action.payload.items.length===0)
            {
                delete(state[action.payload.id]);
            }
            else
            {
                state[action.payload.id]=[...action.payload.items];
            }
            return state.slice();
        case "SET_METHOD":
            state[action.payload.id]=action.payload.value;
            return state.slice();
        case "CART_CLEAR":
            return [];
        case "CART_GET":
            return state;
        default:
            return state;
    }
}

export default reducer_cart;