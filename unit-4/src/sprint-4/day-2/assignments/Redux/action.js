import axios from "axios";
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionType";

export const getTodods = async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });
  try {
    let res = await axios.get("http://localhost:8080/todos");
    let data = await res.data;
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_TODOS_ERROR,
    });
  }
};

export const deleteTodo = async (dispatch, id) => {
  try {
    let res = await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (e) {
    console.log("not found");
  }
};

export const comleteTodo = async (dispatch, id) => {
  try {
    let res = await axios.patch(`http://localhost:8080/todos/${id}`, {
      status: true,
    });
    //   res.data.headers['Content-Type'];
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  } catch (e) {
    console.log("not found");
  }
};

export const addTodo = async (dispatch, payload) => {
  try {
    let res = await axios.post(`http://localhost:8080/todos`, payload);
    dispatch({
      type: ADD_TODO,
      payload,
    });
  } catch (e) {
    console.log("not found");
  }
};
