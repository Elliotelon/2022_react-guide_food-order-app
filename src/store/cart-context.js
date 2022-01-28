import React from "react";

const CartContext = React.createContext({
  items: [],
  totlaAmount: 0,
  addItem: (Item) => {},
  removeItem: (id) => {},
});

export default CartContext;
