import { LOGIN_FAILURE, LOGIN_SUCESS } from "./actionType";

const loginSucess = (token) => {
  return {
    type: LOGIN_SUCESS,
    payload: token,
  };
};

const loginfailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

export { loginSucess, loginfailure };
