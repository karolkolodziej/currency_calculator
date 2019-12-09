import { REMOVE_ITEM } from "../constants/reduxConstants";

export const removeItemReducer = (listOfItems = [], action) => {
  if (action.id === REMOVE_ITEM) {
    return listOfItems.filter(id => id !== action.payload);
  }
  return listOfItems;
};
