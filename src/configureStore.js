import { combineReducers, createStore } from "redux";
import drug from "./features/index";

const reducer = combineReducers({
  drug,
});

const store = createStore(reducer);

export default store;
