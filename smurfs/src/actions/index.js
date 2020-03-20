import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const POST_SMURF_START = "FETCH_SMURF_START";
export const POST_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const REMOVE_SMURF_START = "REMOVE_SMURF_START";
export const REMOVE_SMURF_SUCCESS = "REMOVE_SMURF_SUCCESS";
export const REMOVE_SMURF_FAILURE = "REMOVE_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.response.status });
    });
};

export const postSmurf = data => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({ type: POST_SMURF_FAILURE, payload: err.response.status });
    });
};

export const removeSmurf = id => dispatch => {
  dispatch({ type: REMOVE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: REMOVE_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: REMOVE_SMURF_FAILURE, payload: err }));
};

export const deleteSmurf = smurf => dispatch => {
  dispatch({ type: DELETE_SMURF, payload: smurf });
};
