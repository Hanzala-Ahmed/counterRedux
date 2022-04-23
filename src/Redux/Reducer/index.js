import changeNumber from "./Counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
