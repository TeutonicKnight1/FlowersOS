import { gql } from "@apollo/client";

//В keystone cms есть 2 сущности - OrderFlower и Orders, Orders представляет из себя массив OrderFlower, который в свою очередь состоит из цветов в корзине с указанием их количества.

export const CREATE_FLOWER_ORDER = gql`
  mutation CreateOrderFlower($data: OrderFlowerCreateInput!) {
    createOrderFlower(data: $data) {
      id
      flower {
        id
      }
      quantity
    }
  }
`;
