import "./cartPage.scss";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CartList from "../components/CartList.jsx";
import CartSummary from "../components/CartSummary.jsx";

import useStickyFooter from "../hooks/useStickyFooter";
import { useState } from "react";

function CartPage() {
  const [isFooterSticky, setIsFooterSticky] = useState(false);

  useStickyFooter(isFooterSticky, setIsFooterSticky);

  return (
    <>
      <Header />
      <div className="cart">
        <CartList />
        <CartSummary />
      </div>
      <Footer isFooterSticky={isFooterSticky} />
    </>
  );
}

export default CartPage;
