import { SAVE_ITEM, REMOVE_ITEM } from "../constants/reduxConstants";

export const addOrRemoveTransactionReducer = (
  listOfTransactions = [],
  action
) => {
  if (action.type === SAVE_ITEM) {
    return [...listOfTransactions, action.payload];
  } else if (action.type === REMOVE_ITEM) {
    return listOfTransactions.filter(id => id !== action.payload.id);
  }

  return listOfTransactions;
};
