import axios from "axios";

export const LOGIN = "LOGIN";
export const ERR_LOGIN = "ERR_LOGIN";
export const ADD_SUBTASK = "ADD_SUBTASK";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const UPDATE_SUBTASK = "UPDATE_SUBTASK";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_SUBTASK = "DELETE_SUBTASK";
export const GET_TASK="GET_TASK";
export const LOADING_TASK="LOADING_TASK"; 
export const FILTER_TAG="FILTER_TAG";

export const reqLogin = (dispatch, logindata) => {
  axios
    .post("https://reqres.in/api/login", logindata)
    .then((r) => {
      //   console.log(r.data.token);
      if (r.data.token) {
        dispatch({
          type: LOGIN,
          payload: r.data.token,
        }); //DISPATCH TOKEN WITH ACTION
      }
    })
    .catch((e) => {
      //   console.log(e);
      dispatch({
        type: ERR_LOGIN,
      });
      //   navigate("/error");
    });
};

export const addTask = (dispatch, task) => {
  axios
    .post("http://localhost:8080/task", task)
    .then((r) => console.log(r.data))
    .catch((e) => console.log(e));
};


export const getTask =(dispatch)=>{
    dispatch({type:LOADING_TASK})
    axios("http://localhost:8080/task")
    .then((r)=>{
        console.log(r.data)
        dispatch({
            type:GET_TASK,
            payload:r.data
        })
    })
    .catch((e)=>console.log(e.massage))
}


export const filterData =(tag)=>{
    return{
        type:FILTER_TAG,
        payload:tag
    }
}