const initialState = {
  flowersList: [],
};

function mainListFlowersReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FLOWERS":
      return {
        ...state,
        flowersList: action.payload.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          price: item.price,
          colors: item.colors,
          count: 0, // Добавляем поле count: 0
        })),
      };
    case "CHANGE_COUNT_FLOWERS":
      return {
        ...state,
        flowersList: state.flowersList.map((item) =>
          item.title === action.payload.title
            ? { ...item, count: action.payload.count }
            : item
        ),
      };
    default:
      return state;
  }
}

export default mainListFlowersReducer;
