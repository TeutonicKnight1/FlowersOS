const initialState = {
  cart: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.title !== action.payload.title && item.color !== action.payload.color),
      };

    case "CHANGE_COUNT":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.title === action.payload.title && item.color === action.payload.color
              ? { ...item, count: action.payload.count }
              : item
          )
          .filter((item) => item.count !== 0),
      }
    default:
      return state;
  }
}

export default cartReducer;
