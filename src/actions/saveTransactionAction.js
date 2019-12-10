// docelowo createAction z redux-actions
import uniqid from "uniqid";
import { SAVE_ITEM } from "../constants/reduxConstants";

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
