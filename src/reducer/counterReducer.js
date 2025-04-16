import { counterInitialState } from "../libs/constants";

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "counter/reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
