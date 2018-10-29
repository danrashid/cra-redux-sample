import axios from "axios";

import {
  FETCH_THINGS_REQUEST,
  FETCH_THINGS_SUCCESS,
  FETCH_THINGS_FAILURE
} from "../reducers/things";

const fetchThingsRequest = () => ({
  type: FETCH_THINGS_REQUEST
});

const fetchThingsSuccess = payload => ({
  type: FETCH_THINGS_SUCCESS,
  payload
});

const fetchThingsFailure = error => ({
  type: FETCH_THINGS_FAILURE,
  error
});

const shouldFetchThings = ({ things: { isFetching, things } }) =>
  !isFetching && !things;

const fetchThings = () => async dispatch => {
  try {
    dispatch(fetchThingsRequest());
    const response = await axios.get("/api/things");
    dispatch(fetchThingsSuccess(response.data));
  } catch (error) {
    dispatch(fetchThingsFailure(error));
  }
};

export const fetchThingsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchThings(getState())) {
    dispatch(fetchThings());
  }
};
