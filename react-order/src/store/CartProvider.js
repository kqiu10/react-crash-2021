import React from 'react'
import CartContext from './cart-context'
import { useRedcer } from 'react';


const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

  }
  return defaultCartState;
}
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useRedcer(cartReducer, defaultCartState);
  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
   };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id})
   };
  const cartContext = {
    items: cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>

}

export default CartProvider
