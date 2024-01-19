import { useSelector } from "react-redux";

import CartListElement from "./CartListElement.jsx";
function CartList() {
  let cart = useSelector((state) => state.cart.cart);

  return (
    <div className="cartList">
      {cart ? (
        cart.map((cartElement) => (
          <CartListElement
            key={cartElement.id + cartElement.color}
            id={cartElement.id}
            title={cartElement.title}
            image={cartElement.image}
            price={cartElement.price}
            color={cartElement.color}
            count={cartElement.count}
          />
        ))
      ) : (
        <div>Корзина пуста</div>
      )}
    </div>
  );
}

export default CartList;
