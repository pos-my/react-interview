export const reducerCart=(id,items)=>{
    return{
        type:"CART_ADD",
        payload:{id:id,items:items}
    }
};

export const setCartmethod=(value)=>{
    return{
        type:"SET_METHOD",
        payload:{id:0,value:value}
    }
};

export const clearCart=()=>{
    return{
        type:"CART_CLEAR"
    }
};

export const getCart=()=>{
    return{
        type:"CART_GET"
    }
};