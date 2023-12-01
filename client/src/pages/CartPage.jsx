import "./cartPage.scss";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CartList from "../components/CartList.jsx";

function CartPage() {
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__list__container">
          <CartList/>
        </div>
        <div className="cart__summary__container">
          <div className="cart__summary__container-div">
            <h3 className="cart__summary__container-div__summary">Итого:</h3>
            <div className="cart__summary__container-div__prices">
              <p className="cart__summary__container-div__price">
                Красные розы Х 2 = 2000
              </p>
              <p className="cart__summary__container-div__price">
                Белые лилии Х 2 = 2000
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
