import * as actionTypes from "../actions/actionTypes";



const initialState = {  
    deliveryType:'',
    pizzas:[]
};

const getOrderInformation = (state) => {
  return {
    ...state
  };
};

const updateDeliveryType = (state,action) => {
  return Object.assign({}, state, {
    deliveryType: action
  });
};

const addPizza=(state,action)=>{
  return Object.assign({}, state, {
    pizzas:state.pizzas.concat(action)
  });
}

const deletePizza=(state,action)=>{
  var idx = state.pizzas.findIndex(x => x.id === action.id);
  var newPizzas = Object.assign([], state.pizzas);
  newPizzas.splice(idx, 1);
  return Object.assign({}, state, {
    pizzas: newPizzas
  });
}

const updatePizza=(state,action)=>{
  var pizzas= Object.assign([], state.pizzas);
  var idx = pizzas.findIndex(x => x.id === action.id);
  if (idx >= 0) {
    pizzas[idx] =action;
  }
  return Object.assign({}, state, {
    pizzas: pizzas
  });
}

const processOrder=(state)=>{
  return Object.assign({}, state, {
    pizzas: []
  });
}



const reducer = (state = initialState, action) => {
  console.log('action',action);
  switch (action.type) {
    case actionTypes.GET_ORDERINFORMATION:
      return getOrderInformation(state);
    case actionTypes.UPDATE_DELIVERYTYPE:
      return updateDeliveryType(state, action.data); 
    case actionTypes.ADD_PIZZA:
      return addPizza(state, action.data);  
    case actionTypes.REMOVE_PIZZA:
      return deletePizza(state, action.data); 
    case actionTypes.UPDATE_PIZZA:
      return updatePizza(state, action.data); 
    case actionTypes.PROCESS_ORDER:
        return processOrder(state);   
    default:
      return state;
  }
};

export default reducer;
