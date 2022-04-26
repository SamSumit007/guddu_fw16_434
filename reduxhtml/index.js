import Store from "./Store.js";

import { reducer } from "./Reducer.js";

const store = new Store(reducer, {
  count: 50,
});

let counter = document.getElementById("counter");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");

counter.innerText = store.getState().count;

inc.addEventListener("click", function () {
  store.dispatch({
    type: "INCREMENT",
  });
  counter.innerText = store.getState().count;
});

dec.addEventListener("click", function () {
  store.dispatch({
    type: "DECREMENT",
  });
  counter.innerText = store.getState().count;
});
