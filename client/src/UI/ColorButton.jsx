import classes from "./moduleSCSS/colorButton.module.scss";
import PropTypes from "prop-types";

function ColorButton({ color, active, callback, disabled, isActive }) {
  const handleButtonClick = () => {
    callback(color);
    isActive(color);
  };

  return (
    <>
      <button
        className={!active ? classes.colorButton : `${classes.colorButton} ${classes.colorButton_active}`}
        style={{ backgroundColor: color }}
        onClick={handleButtonClick || null}
        disabled={disabled || false}
      />
    </>
  );
}

ColorButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string.isRequired,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  isActive: PropTypes.func,
};

export default ColorButton;
