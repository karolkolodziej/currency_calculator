import { REMOVE_ITEM } from "../constants/reduxConstants";

export const removeFromListAction = id => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id
    }
  };
};
