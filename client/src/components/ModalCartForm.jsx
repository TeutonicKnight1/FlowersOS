import "../styles/modalCartForm.scss";

import PropTypes from "prop-types";
import { CREATE_FLOWER_ORDER } from "../../apollo/query/createFlowerOrder";
import { CREATE_ORDERS } from "../../apollo/query/createOrders";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { useState } from "react";

import Button from "../UI/Button";

export default function ModalCartForm({ isActive, setActive, summary }) {
  const cart = useSelector((state) => state.cart.cart);
  const [createOrderFlower, { data, error }] = useMutation(CREATE_FLOWER_ORDER);
  const [createOrders, { data: orderData, error: orderError }] =
    useMutation(CREATE_ORDERS);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    setActive(() => false);
    handleOrderButtonClick(name, email);
  };

  async function handleOrderButtonClick(name, email) {
    const handleSubmitOrderFlower = async (flowerId, quantity) => {
      try {
        const { data } = await createOrderFlower({
          variables: {
            data: {
              flower: { connect: { id: flowerId } },
              quantity: quantity,
            },
          },
        });
        console.log("Заказ цветка создан:", data.createOrderFlower);
        return data.createOrderFlower.id;
      } catch (error) {
        console.error("Ошибка при создании заказа цветка:", error);
      }
    };

    const handleSubmitOrders = async (name, email, idArray) => {
      try {
        await Promise.all(
          idArray.map(async (orderId) => {
            if (orderId) {
              const { data: orderData } = await createOrders({
                variables: {
                  data: {
                    name,
                    email,
                    orderFlowers: {
                      connect: orderId,
                    },
                    price: summary,
                  },
                },
              });
              console.log("Заказ создан:", orderData.createOrders);
            }
          })
        );
      } catch (orderError) {
        console.error("Ошибка при создании заказа:", orderError);
      }
    };

    const orders = [];

    for (const item of cart) {
      const flowerId = item.id;
      const quantity = item.count;
      const flowerOrder = await handleSubmitOrderFlower(flowerId, quantity);
      if (flowerOrder) {
        orders.push(flowerOrder); // Добавляем каждый экземпляр flowerOrder в массив orders
      }
    }

    const resolvedOrders = await Promise.all(orders);
    const idArray = resolvedOrders.map((order) => ({ id: order }));

    handleSubmitOrders(name, email, idArray);
  }

  return (
    <div className={isActive ? "modalCartForm__active" : "modalCartForm"}>
      <div className="modalCartForm__content">
        <form className="modalCartForm__content__form">
          <label className="modalCartForm__content__form__label__name">
            <p className="modalCartForm__content__form__label__name__text">
              Ваше имя
            </p>
            <input
              className="modalCartForm__content__form__label__name__input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="modalCartForm__content__form__label__email">
            <p className="modalCartForm__content__form__label__email__text">
              Ваша почта
            </p>
            <input
              className="modalCartForm__content__form__label__email__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <div className="modalCartForm__content__button">
          <Button text="Отправить" callback={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

ModalCartForm.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  summary: PropTypes.number.isRequired,
};
