// import { createStore } from "redux";
// import counterReducer from "../reducer/counterSlice";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer/counterSlice";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(counterReducer, composedEnhancers);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
