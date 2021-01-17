export const AddToCart = (state) => {
    return{
        type : "AddToCart" ,
        payload : {
            EmtypCart : false,
            CartInfo : state
        }
    }
}

export const DeleteFromCart = (state) => {
    return{
        type : "DeleteFromCart",
        payload : {
            EmtypCart : false,
            Id : state
        }
    }
}

export const EmtypCart = (state) => {
    return{
        type : "EmtypCart",
        payload : {
            EmtypCart : true,
            CartInfo : []
        }
    }
}