import { createStore } from "redux";
import counterReducer from "../reducer/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(counterReducer, composedEnhancers);

export default store;
