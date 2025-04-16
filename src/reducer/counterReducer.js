const counterReducer = (state, action) => {
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
  }
};

export default counterReducer;
