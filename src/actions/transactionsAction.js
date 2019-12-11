import uniqid from "uniqid";
import { SAVE_ITEM, REMOVE_ITEM } from "../constants/transactionsConstants";

export const saveTransactionAction = (
  title,
  exchangeRate,
  amount,
  exchValue
) => {
  return {
    type: SAVE_ITEM,
    payload: {
      title,
      exchangeRate,
      amount,
      exchValue,
      id: uniqid()
    }
  };
};

export const removeFromListAction = id => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id
    }
  };
};
