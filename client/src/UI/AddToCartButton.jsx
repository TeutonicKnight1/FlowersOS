import classes from "./moduleSCSS/addToCartButton.module.scss";
import PropTypes from "prop-types";

import plusIcon from "../assets/plusIcon.png";
import minusIcon from "../assets/minusIcon.png";

function AddToCartButton({ count, callback }) {
  function handleClickPlus() {
    callback((count) => count + 1);
  }

  function handleClickMinus() {
    if (count - 1 < 0) return;

    callback((count) => count - 1);
  }

  return (
    <>
      <div>
        {count == 0 ? (
          <button onClick={handleClickPlus} className={classes.addToCartButton}>
            Добавить в корзину
          </button>
        ) : (
          <div className={classes.changeCountContainer}>
            <button
              className={classes.changeCountUpButton}
              onClick={handleClickPlus}
            >
              <img src={plusIcon} className={classes.img} />
            </button>
            <p className={classes.p}>{count}</p>
            <button
              className={classes.changeCountDownButton}
              onClick={handleClickMinus}
            >
              <img src={minusIcon} className={classes.img} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

AddToCartButton.propTypes = {
  count: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddToCartButton;
