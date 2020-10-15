import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_USER } from "../actionTypes";


export const loadUser = user => ({
    type: LOAD_USER,
    user
  });

export const fetchUser = (id) => {
    return dispatch => {
      return apiCall("get",`/api/users/${id}`)
        .then(res => {
          dispatch(loadUser(res));
          console.log(res);
        })
        .catch(err => {
          dispatch(addError(err));
        });
    };
  };
