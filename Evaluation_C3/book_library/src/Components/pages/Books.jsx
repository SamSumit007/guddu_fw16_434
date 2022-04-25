import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
margin: auto 3%;
gap: 20px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async () => {
      let res = await fetch("http://localhost:8080/books");
      let Data = await res.json();
      // console.log(Data);
      setData(Data);
    };
    getData()
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}

        {data.map((elem) => {
          return <BookCard key={elem.id} {...elem} />;
        })}
      </Grid>
    </>
  );
};
export default Books;
