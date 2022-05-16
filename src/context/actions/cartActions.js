import cartTypes from "../reducers/cartTypes"

export const openCartMenu = () => ({
  type: cartTypes.OPEN_MENU
})

export const closeCartMenu = () => ({
  type: cartTypes.CLOSE_MENU
})

export const addItemToCart = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})

export const deleteItemFromCart = (price, index) => ({
  type: cartTypes.DELETE_ITEM,
  payload: {
    price,
    index
  }
})
