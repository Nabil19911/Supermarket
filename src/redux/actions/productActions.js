import { ActionTypes } from "../contants/action-type";

export const setProducts = products => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
