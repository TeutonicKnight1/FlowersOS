import "../styles/index.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../UI/Button";

import ModalCartForm from "./ModalCartForm";

export default function CartSummary() {
  const cart = useSelector((state) => state.cart.cart);

  const [summary, setSummary] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [modalWindowActive, setModalWindowActive] = useState(false);

  function countSummary() {
    let summary = 0;
    cart.forEach((item) => {
      summary += item.price * item.count;
    });

    return summary;
  }

  function showItemsInCart() {
    let array = [];
    itemsInCart.forEach((item) => {
      array.push({ title: item.title, price: item.price, count: item.count });
    });

    return array;
  }

  useEffect(() => {
    setSummary(countSummary());
    setItemsInCart(showItemsInCart());
  }, [cart]);

  return (
    <div className="cart-summary">
      <h3 className="cart-summary__summary">Итого:</h3>
      <div className="cart-summary-div">
        {itemsInCart.map((item) => (
          <p key={item.title + item.colors} className="cart-summary-div__price">
            {item.title} Х {item.count} = {item.price * item.count}
          </p>
        ))}
      </div>
      <p className="cart-summary__sum">К оплате: {summary}</p>
      <Button
        text="Оформить заказ"
        callback={() => {
          setModalWindowActive(true);
        }}
      />
      <ModalCartForm
        isActive={modalWindowActive}
        setActive={setModalWindowActive}
        summary={summary}
      />
    </div>
  );
}
