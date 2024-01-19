import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  text,
  json,
  password,
  timestamp,
  integer,
} from "@keystone-6/core/fields";

import type { Lists } from ".keystone/types";

export const lists: Lists = {
  User: list({
    access: allowAll,

    // this is the fields for our User list
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" },
      }),
    },
  }),

  Flowers: list({
    access: allowAll,
    graphql: {
      plural: "FlowersList",
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      description: text({
        defaultValue: "Hello World",
        validation: {
          isRequired: true,
        },
        isIndexed: "unique",
        ui: { displayMode: "textarea" },
      }),
      price: integer({ validation: { isRequired: true } }),
      colors: json({
        defaultValue: ["red", "green", "yellow"],
      }),
      image: text({
        validation: { isRequired: true },
        defaultValue: "https://source.unsplash.com/random",
      }),
    },
  }),

  Orders: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
      }),
      price: integer({ validation: { isRequired: true } }),
      createdAt: timestamp({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" },
      }),
      orderFlowers: relationship({ ref: "OrderFlower.order", many: true }),
    },
    graphql: {
      plural: "OrdersList",
    },
  }),

  OrderFlower: list({
    access: allowAll,
    fields: {
      order: relationship({ ref: "Orders.orderFlowers", many: false }),
      flower: relationship({ ref: "Flowers", many: false }),
      quantity: integer(),
    },
    hooks: {
      resolveInput: async ({ resolvedData }) => {
        // Автоматически выбираем поле "order" при выборе "OrderFlower" в "Orders"
        if (resolvedData.order) {
          return {
            ...resolvedData,
            order: { connect: { id: resolvedData.order } },
          };
        }
  
        return resolvedData;
      },
    },
  })
};
