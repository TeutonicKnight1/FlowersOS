import "../styles/index.scss";
import PropTypes from "prop-types";
import { useState } from "react";

import ListColorButton from "../UI/ListColorButton";
import AddToCartButton from "../UI/AddToCartButton";
import { useSelector, useDispatch } from "react-redux";

export default function ListElement({
  title,
  description,
  image,
  price,
  colors,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [countFlowers, setCountFLowers] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorButtonClick = (color) => {
    setSelectedColor(() => color);
  };

  const addToCart = (flowers) => {
    
    setCountFLowers(() => flowers);

    const findedItem = cart.find((item) => {
      if (item.title === title && item.color === selectedColor) {
        return item;
      }
    });

    if (findedItem != undefined) {
      findedItem.count = countFlowers;
      console.log("findedItem", findedItem);
    } else {
      const newCartItem = {
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

      console.log("cart", cart);
      localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));
    }
  };

  return (
    <>
      <div className="listElement">
        <div className="listElement__div">
          <img className="listElement__div-img" src={image} />
        </div>
        <div className="listElement__container">
          <div className="listElement__container-info">
            <h3 className="listElement__container-info__title">{title}</h3>
            <p className="listElement__container-info__description">
              {description}
            </p>
            <div>
              <ListColorButton
                colors={colors}
                callback={handleColorButtonClick}
              />
            </div>
            <div className="listElement__container-info__container-price">
              <AddToCartButton count={countFlowers} callback={addToCart} />
              <p className="listElement__container-info__container-price-p">
                ₽ {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ListElement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
};
