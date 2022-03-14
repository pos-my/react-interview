export const pickup = () => {
    return {
        type: 'PICKUP'
    }
}

export const delivery = () => {
    return {
        type: 'DELIVERY'
    }
}

export const addCart = (orderDetail) => {
    return {
        type: 'ADD_ORDER',
        payload: orderDetail
    }
}

export const addFromSummary = (index) => {
    return {
        type: 'ADD_ITEM_SUMMARY',
        payload: index
    }
}

export const removeFromSummary = (index) => {
    return {
        type: 'REMOVE_ITEM_SUMMARY',
        payload: index
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}

export const sumTotal = (itemList) => {
    return {
        type: 'TOTAL',
        payload: itemList
    }
}