const changeCountInCart = (
    cart,
    dispatch,
    title,
    selectedColor,
    count
) => {
    const findedItem = cart.find((item) => {
        if (item.title === title && item.color === selectedColor) {
            return item;
        }
    });

    if (findedItem != undefined) {
        if (findedItem.count === 0) {
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
                    count: count,
                },
            });
        }

        dispatch({
            type: "CHANGE_COUNT_FLOWERS",
            payload: {
              title: title,
              count: count,
            },
          });
    }
}

export default changeCountInCart;