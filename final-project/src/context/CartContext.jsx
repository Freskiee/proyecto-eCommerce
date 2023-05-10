import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );
    let tempCart;
    if (itemIndex === -1) {
      tempCart = [...cart, { item, quantity }]
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      tempCart = newCart
    }
    setCart(tempCart)
    window.localStorage.setItem('cart', JSON.stringify(tempCart))
  };

  const removeItem = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);
    let tempCart;
    if (existingItem.quantity === 1) {
        tempCart = cart.filter((cartItem) => cartItem.item.id !== item.id)
    } else {
        tempCart =
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }
    setCart(tempCart)
    window.localStorage.setItem('cart', JSON.stringify(tempCart))
  };

  const removeProduct = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart))
  };

  const clear = () => {
    setCart([]);
    window.localStorage.removeItem('cart')
  };

  const getQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.item.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalQuantity = () => {
    return cart.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.item.price * cartItem.quantity,
      0
    );
  };


  useEffect(() => {
    const tempCart = window.localStorage.getItem('cart')
    if (tempCart) {
      setCart(JSON.parse(tempCart))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        removeProduct,
        clear,
        getQuantity,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

CartContextProvider.propTypes = {
  children: PropTypes.any,
};

export {
  CartContext,
  CartContextProvider,
  // eslint-disable-next-line react-refresh/only-export-components
  useCartContext,
};
