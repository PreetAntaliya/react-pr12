const initialState = {
  users: [],
};

export const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DATA":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
