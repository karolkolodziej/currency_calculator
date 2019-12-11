import { combineReducers } from "redux";

import { transacionsReducer } from "./transactionsReducer";

export default combineReducers({
  transactions: transacionsReducer
});
