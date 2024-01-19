import "../styles/index.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import ListColorButton from "../UI/ListColorButton";
import AddToCartButton from "../UI/AddToCartButton";
import { useSelector, useDispatch } from "react-redux";
import addToCart from "../store/actions/addToCart";

export default function ListElement({
  id,
  title,
  description,
  image,
  price,
  colors,
  count,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [itFirstRender, setItFirstRender] = useState(true);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [countFlowers, setCountFLowers] = useState(count);

  const handleColorButtonClick = (color) => {
    setSelectedColor(() => color);
  };

  useEffect(() => {
    if (itFirstRender) {
      setItFirstRender(false);
      return;
    }
    addToCart(id, cart, dispatch, countFlowers, title, image, price, selectedColor);
  }, [countFlowers]);

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
              <AddToCartButton
                count={countFlowers}
                callback={setCountFLowers}
              />
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  count: PropTypes.number,
};
