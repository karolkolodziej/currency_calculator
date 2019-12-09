import { SAVE_ITEM } from "../constants/reduxConstants";

export const addNewTransactionReducer = (listOfTransactions = [], action) => {
  if (action.type === SAVE_ITEM) {
    return [...listOfTransactions, action.payload];
  }

  return listOfTransactions;
};
