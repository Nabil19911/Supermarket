import { ActionTypes } from "../contants/action-type";

const initialState = {
  product: [
    {
      product: "",
      Price: "",
      quantity: 0,
    },
  ],
};

export const productReducer = (state = initialState, { type, products }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return [...state, products];
    default:
      return state;
  }
};
