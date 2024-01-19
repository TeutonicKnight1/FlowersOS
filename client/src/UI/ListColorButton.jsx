import PropTypes from "prop-types";
import { useState } from "react";

import classes from "./moduleSCSS/listColorButton.module.scss";

import ColorButton from "./ColorButton";

export default function ListColorButton({ colors, callback }) {

  const [colorsActive, setColorsActive] = useState(() => {
    const initialColorsActive = {};
    colors.forEach((color) => {
      initialColorsActive[color] = false;
    });
    return initialColorsActive;
  });

  const handleColorButtonClick = (color) => {
    setColorsActive((colorsActive) => {
      const updatedColorsActive = {};
      Object.keys(colorsActive).forEach((key) => {
        updatedColorsActive[key] = key === color ? !colorsActive[key] : false;
      });
      return updatedColorsActive;
    });
  };

  // {
  //   green: false,
  //   red: false,
  //   ...
  // }

  return (
    <div className={classes.listColorButton}>
      {colors.map((color) => (
        <ColorButton key={color} color={color} active={colorsActive[color]} callback={callback} isActive={handleColorButtonClick}/>
      ))}
    </div>
  );
}

ListColorButton.propTypes = {
  colors: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
};
