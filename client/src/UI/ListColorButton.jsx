import PropTypes from "prop-types";

import ColorButton from "./ColorButton";

export default function ListColorButton({ colors, callback }) {
  return (
    <>
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          callback={callback}
        />
      ))}
    </>
  );
}

ListColorButton.propTypes = {
  colors: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
}
