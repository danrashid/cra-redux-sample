export const FETCH_THINGS_REQUEST = "FETCH_THINGS_REQUEST";
export const FETCH_THINGS_SUCCESS = "FETCH_THINGS_SUCCESS";
export const FETCH_THINGS_FAILURE = "FETCH_THINGS_FAILURE";

const initialState = {
  isLoading: false,
  things: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THINGS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_THINGS_SUCCESS:
      return {
        isLoading: false,
        things: action.payload,
        error: null
      };
    case FETCH_THINGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
