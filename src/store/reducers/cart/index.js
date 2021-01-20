export const cart = (state = { EmtypCart: true , CartInfo : []}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "AddToCart":
      return {
        EmtypCart: false,
        CartInfo: action.payload.CartInfo,
      };
    case "DeleteFromCart":
      const filter = state.CartInfo.filter((x) => x.Id !== action.payload.Id);
      let isEmpty = filter.length === 0 ? true : false;
      return {
        EmtypCart: isEmpty,
        CartInfo: filter,
      };
    case "EmtypCart":
      return {
        EmtypCart: true,
        CartInfo: [],
      };
    default:
      return state;
  }
};
