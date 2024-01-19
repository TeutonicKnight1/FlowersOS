const addToCart = (
  id,
  cart,
  dispatch,
  countFlowers,
  title,
  image,
  price,
  selectedColor
) => {
  const findedItem = cart.find((item) => {
    if (item.title === title && item.color === selectedColor) {
      return item;
    }
  });

  if (findedItem != undefined) {
    findedItem.count = countFlowers;

    if (countFlowers === 0) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          title: title,
          color: selectedColor,
        },
      });
    } else {
      dispatch({
        type: "CHANGE_COUNT",
        payload: {
          title: title,
          color: selectedColor,
          count: countFlowers,
        },
      });
    }
  } else {
    const newCartItem = {
      id: id,
      title: title,
      image: image,
      price: price,
      color: selectedColor,
      count: countFlowers,
    };

    dispatch({
      type: "ADD_TO_CART",
      payload: newCartItem,
    });
  }

  dispatch({
    type: "CHANGE_COUNT_FLOWERS",
    payload: {
      title: title,
      count: countFlowers,
    },
  });
};

export default addToCart;
