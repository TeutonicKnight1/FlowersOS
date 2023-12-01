import classes from "./colorButton.module.scss";
import PropTypes from "prop-types";

function ColorButton({ color, callback }) {
  const handleButtonClick = () => {
    callback(color);
  };

  return (
    <>
      <button
        className={classes.colorButton}
        style={{ backgroundColor: color }}
        onClick={handleButtonClick}
      />
    </>
  );
}

ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ColorButton;
