import { combineReducers } from "redux";

import { addOrRemoveTransactionReducer } from "./addOrRemoveTransactionReducer";

export default combineReducers({
  listOfItems: addOrRemoveTransactionReducer
});
