import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from './reducers/cartReducer';

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.log('Error deploying CartContext! 🛑')
    return {};
  }

  return context;
}

const initialState = {
  isActive: false,
  data: [],
  total: 0
}

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch ] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{
      cartState,
      cartDispatch
    }} >
      { children }
    </CartContext.Provider>
  )
}
 