import { REMOVE_ITEM } from "../constants/reduxConstants";

export const removeFromListAction = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};
