const cartState = {
    deliveryType: '-',
    total: 0,
    cart: []
}
const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "DELIVERY":
        return {
            ...state,
            deliveryType: 'delivery'
        }; 
    case "PICKUP":
        return {
            ...state,
            deliveryType: 'pickup'
        };
    case "ADD_ORDER": 
        const filterId = state.cart.filter(item => item.itemId === action.payload.itemId && 
                                                   item.extraCheese === action.payload.extraCheese &&
                                                   item.size === action.payload.size
                                          )
        let newState = JSON.parse(JSON.stringify(state));
        if (filterId.length === 0){
            action.payload.id = state.cart.length;
            newState.cart.push(action.payload);
        } else {
            let id = filterId[0].id;
            newState.cart[id].quantity = state.cart[id].quantity + action.payload.quantity;
        }
        return newState;
    case "ADD_ITEM_SUMMARY":
        const index1 = action.payload;
        state.cart[index1].quantity = state.cart[index1].quantity + 1;
        let increase = JSON.parse(JSON.stringify(state));
        return increase;
    case "REMOVE_ITEM_SUMMARY":
        const index2 = action.payload;
        if (state.cart[index2].quantity === 1){
            state.cart.splice(index2);
        } else {
            state.cart[index2].quantity = state.cart[index2].quantity - 1;
        }
        let decrease = JSON.parse(JSON.stringify(state));
        return decrease;
    case "EMPTY_CART": 
        return {
            deliveryType: '-',
            total: 0,
            cart: []
        }
    case "TOTAL":
        if(state.cart.length === 0){
            return {
                ...state,
                total: 0
            }
        } 
        const itemValue = state.cart.map( (item) => {
            return action.payload[item.itemId-1].price * item.quantity;
        } );
        const totalItemValue = itemValue.reduce( (accumulator, curr) => accumulator + curr );
        return {
            ...state,
            total: totalItemValue
        };
    default:
        return state;
  }
};

export default cartReducer;