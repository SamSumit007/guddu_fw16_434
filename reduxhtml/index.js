import Store from "./Store.js";
import { reducer } from "./Reducer.js";

let counter = document.getElementById("counter");
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
let add = document.getElementById("add");
let sub = document.getElementById("subtract");
let multi = document.getElementById("multiply");
let divide = document.getElementById("divide");
let x = document.getElementById("inpValue");

const store = new Store(reducer, {
  count: 0,
});

counter.innerText = store.getState().count;
// increment
inc.addEventListener("click", function () {
  store.dispatch({
    type: "INCREMENT",
  });
  counter.innerText = store.getState().count;
});

// decrement
dec.addEventListener("click", function () {
  store.dispatch({
    type: "DECREMENT",
  });
  counter.innerText = store.getState().count;
});

// Adding
add.addEventListener("click", function () {
  let X = x.value;
  store.dispatch({
    type: "ADD",
    value: X,
  });
  counter.innerText = store.getState().count;
});

// subtract
sub.addEventListener("click", function () {
  let X = x.value;
  store.dispatch({
    type: "SUBTRACT",
    value: X,
  });
  counter.innerText = store.getState().count;
});

// MULTIPLY
multi.addEventListener("click", function () {
  let X = x.value;
  store.dispatch({
    type: "MULTIPLY",
    value: X,
  });
  counter.innerText = store.getState().count;
});

// divide
divide.addEventListener("click", function () {
  let X = x.value;
  store.dispatch({
    type: "DIVIDE",
    value: X,
  });
  counter.innerText = store.getState().count;
});
