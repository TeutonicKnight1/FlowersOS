import "../styles/index.scss";
import { Link } from "react-router-dom";

import burgerIcon from "../assets/burgerIcon.svg";
import cartIcon from "../assets/cartIcon.png";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <button
            className="header__logo__burger-button"
          >
            <img
              className="header__logo__burger-button-icon"
              src={burgerIcon}
              alt="burger menu"
            />
          </button>
          <Link className="header__logo__link" to="/">
            ЧЁРНАЯ & РОЗА
          </Link>
          <button
            className="header__logo__cart-button"
          >
            <Link to="/cart">
              <img
                className="header__logo__cart-button-icon"
                src={cartIcon}
                alt="cart"
              />
            </Link>
          </button>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="header__nav__links__about">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
