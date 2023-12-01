import ChangeCartCounter from "../UI/ChangeCartCounter";
import { PropTypes } from "prop-types"
import { useState } from "react";


function CartListElement({title, price, image, color, count}) {
  const [countInCart, setCountInCart] = useState(count || 0);

  return (
    <>
      <div className="cart__element">
        <div className="cart__element-div">
          <img
            className="cart__element-div__img"
            src={image}
          />
        </div>
        <div className="cart__element-info">
          <p className="cart__element-info__title">{title}</p>
          <p className="cart__element-info__price">Цена за 1 шт.: {price}</p>
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
  count: PropTypes.number.isRequired
}

export default CartListElement;
