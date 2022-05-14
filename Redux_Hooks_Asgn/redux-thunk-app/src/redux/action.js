import axios from "axios";
export const REQUEST_DATA = "REQUEST_DATA";
export const GET_DATA = "GET_DATA";
export const ERROR_DATA = "ERROR_DATA";
export const LOGIN = "LOGIN";
export const LOGIN_ERR = "LOGIN_ERR";
export const GET_PROFILE = "GET_PROFILE";

export const getReqData = (dispatch, username) => {
  dispatch(reqData());
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((r) => r.json())
    .then((d) => {
      console.log(d);
      dispatch({
        type: GET_DATA,
        payload: d,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(errData(err));
    });
};

export const reqData = () => {
  return {
    type: REQUEST_DATA,
  };
};

export const errData = () => {
  return {
    type: ERROR_DATA,
  };
};

export const login = (dispatch, logindata) => {
  axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", logindata)
    .then((r) => {
      console.log(r.data.token);
      dispatch({
        type: LOGIN,
        payload: { token: r.data.token, username: logindata.username },
      });
    })
    .catch((e) =>
      dispatch({
        type: LOGIN_ERR,
      })
    );
};

export const getProfile = (dispatch, user, token) => {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${user}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((r) => r.json())
    .then((d) => {
      console.log(d);
      dispatch({
        type: GET_PROFILE,
        payload: d,
      });
    })
    .catch((e) => console.log(e));
};
