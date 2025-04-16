import { createSlice } from "@reduxjs/toolkit";
import { counterInitialState } from "../libs/constants";

// const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case "counter/increment":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "counter/decrement":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "counter/reset":
//       return {
//         ...state,
//         count: 0,
//       };
//     default:
//       return state;
//   }
// };

// export default counterReducer;

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice;
