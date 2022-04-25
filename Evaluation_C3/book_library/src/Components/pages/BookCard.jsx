import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import styled  from "styled-components";
import { AuthContext } from "../context/AuthContext";
export const Flex = styled.div`
border:solid black 1px
`;
export const BookCard = (props) => {
  const {divdata, setdivdata} = useContext(AuthContext)
  const { id, title, isbn, pageCount, thumbnailUrl } = props;

  return (
    <>
    <Link onClick={()=>setdivdata(`${id}`)} to = {`/books/${divdata}`}>
      <Flex >
        <img  src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
      </Flex>
    </Link>
    </>
  );
};
