import {
  REQUEST_DATA,
  GET_DATA,
  ERROR_DATA,
  LOGIN,
  LOGIN_ERR,
  GET_PROFILE,
} from "./action";

const initState = {
  isLoadding: false,
  isError: false,
  profileData: {},
  gitRepo: [],
  token: "",
  user: "",
  loginerr: false,
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQUEST_DATA: {
      return {
        ...state,
        isLoadding: true,
        isError: false,
        gitRepo: [],
      };
    }
    case GET_DATA: {
      return {
        ...state,
        isLoadding: false,
        isError: false,
        gitRepo: payload,
      };
    }
    case ERROR_DATA: {
      return {
        ...state,
        isLoadding: false,
        isError: true,
        gitRepo: [],
      };
    }
    case LOGIN: {
      console.log(payload.token, payload.username);
      return {
        ...state,
        isLoadding: false,
        isError: false,
        token: payload.token,
        user: payload.username,
      };
    }
    case LOGIN_ERR: {
      return {
        ...state,
        loginerr: true,
        token: "",
        user: "",
      };
    }
    case GET_PROFILE: {
      console.log(payload);
      return {
        ...state,
        loginerr: false,
        profileData: payload,
      };
    }
    default:
      return state;
  }
};
