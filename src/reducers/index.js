import { combineReducers } from "redux";

import { addNewTransactionReducer } from "./addNewTransactionReducer";
import { removeItemReducer } from "./removeItemReducer";

export default combineReducers({
  listOfItems: addNewTransactionReducer,
  newListOfItems: removeItemReducer
});
