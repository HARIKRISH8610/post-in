function reducer(state = "", action) {
  switch (action.type) {
    case "get_url":
      return {
        type: "get_url",
        payload: [...state.payload, ...action.payload],
      };
    case "Initial":
      return {
        type: "Initial",
        payload: [],
      };
    default:
      return {
        payload: [],
      };
  }
}

export default reducer;
