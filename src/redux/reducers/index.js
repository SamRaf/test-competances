import { combineReducers } from "redux";
import bagReducer from "./gab_reducer";
export default combineReducers({
  newBag: bagReducer,
});
