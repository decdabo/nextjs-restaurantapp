import cartTypes from "./cartTypes";

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case cartTypes.OPEN_MENU:
      return {
        ...state,
        isActive: true
      }
    case cartTypes.CLOSE_MENU:
      return {
        ...state,
        isActive: false
      }
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        data: [...state.data, payload],
        total: state.total + payload.price
      }
    case cartTypes.DELETE_ITEM:
      const newData = state.data
      newData.splice( payload.index, 1 )
      return {
        ...state,
        data: newData,
        total: state.total - payload.price
      }
    default:
     return state;
  }
}