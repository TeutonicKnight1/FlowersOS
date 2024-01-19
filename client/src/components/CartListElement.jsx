import '../styles/index.scss';

import ChangeCartCounter from "../UI/ChangeCartCounter";
import ColorButton from "../UI/ColorButton";

import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import changeCountInCart from "../store/actions/changeCountInCart";

function CartListElement({ title, price, image, color, count }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  
  const [countInCart, setCountInCart] = useState(count || 0);
  const [itFirstRender, setItFirstRender] = useState(true);

  useEffect(() => {
    if (itFirstRender) {
      setItFirstRender(false);
      return;
    }

    changeCountInCart(
      cart,
      dispatch,
      title,
      color,
      countInCart
    )
  }, [countInCart]);

  return (
    <>
      <div className="cart__element">
        <div className="cart__element-div">
          <img className="cart__element-div__img" src={image} />
        </div>
        <div className="cart__element-info">
          <p className="cart__element-info__title">{title}</p>
          <p className="cart__element-info__price">Цена за 1 шт.: {price}</p>
          <div className="cart__element-info__color-container">
            <p className="cart__element-info__color-container__title">Цвет:</p>
            <ColorButton color={color} disabled={true}/>
          </div>
          <div className="cart__element-info__counter">
            <ChangeCartCounter count={countInCart} callback={setCountInCart} />
          </div>
        </div>
      </div>
    </>
  );
}

CartListElement.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default CartListElement;
