import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
  DELETE_SMURF,
  REMOVE_SMURF_START,
  REMOVE_SMURF_SUCCESS,
  REMOVE_SMURF_FAILURE
} from "../actions/index";

const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
  isPosting: false,
  isDeleting: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: "action.payload",
        isFetching: false
      };
    case POST_SMURF_START: {
      return {
        ...state,
        error: "",
        isPosting: true
      };
    }
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isPosting: false,
        smurfs: [...state.smurfs, action.payload]
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPosting: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(a => a !== action.payload)
      };
    case REMOVE_SMURF_START:
      return {
        ...state,
        error: "",

        isDeleting: true
      };
    case REMOVE_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        smurfs: state.smurfs.filter(a => a.id !== action.payload),

        isDeleting: false
      };
    case REMOVE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,

        isDeleting: false
      };
    default:
      return state;
  }
}

export default rootReducer;
