export const method = (state = {DeliveryMethod : undefined}, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case "DeliveryMethod":
            return{
                DeliveryMethod : action.payload.Method
            }
    }
    return state;
}