import React from "react";

const isPrime = (n: number) => {
  let count = 0;
  if (n == 0 || n == 1) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
};
const getNthprime = (n: number) => {
  let count = 1;
  let i = 0;
  while (count <= n) {
    i++;
    let res = isPrime(i);
    if (res) {
      count++;
    }
  }
  return i;
};

export const GetPrime = (value: number, next: any) => {
  const val = getNthprime(value);
  return (
    <div>
      <h3>the {value} th prime number is </h3>
      <h3>{val}</h3>
      <button onClick={next}>Next</button>
    </div>
  );
};
