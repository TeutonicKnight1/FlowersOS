import { gql } from "@apollo/client";

//В keystone cms есть 2 сущности - OrderFlower и Orders, Orders представляет из себя массив OrderFlower, который в свою очередь состоит из цветов в корзине с указанием их количества.

export const CREATE_ORDERS = gql`
  mutation CreateOrders($data: OrdersCreateInput!) {
    createOrders(data: $data) {
      id
      email
      name
      orderFlowers {
        id
      }
      price
    }
  }
`;
