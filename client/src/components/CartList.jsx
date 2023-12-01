import { useSelector } from "react-redux";

import CartListElement from "./CartListElement.jsx";
function CartList() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      {cart.map((cartElement) => (
        <CartListElement
          key={Date.now() + Math.random()}
          title={cartElement.title}
          image={cartElement.image}
          price={cartElement.price}
          color={cartElement.color}
          count={cartElement.count}
        />
      ))}
    </>
  );
}

export default CartList;
