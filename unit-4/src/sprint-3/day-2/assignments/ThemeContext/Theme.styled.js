import styled from "styled-components";

export const NavbarDiv = styled.div`
display: flex;
 justify-content:space-around;
  border:solid 1px black;
  background-color:${({color})=>color=="white" ? "black":"white"};
  color:${({color})=>color=="white" ? "white":"black"};;
`;

export const Dashdiv = styled.div`
width:fit-content;
padding:20px;
margin:20px auto;
background-color:${({color})=>color=="white" ? "black":"white"};
color:${({color})=>color=="white" ? "white":"black"};;

`;

export const MapDiv = styled.div`
padding:20px;
background-color:${({color})=>color=="white" ? "black":"whitesmoke"};
color:${({color})=>color=="white" ? "white":"black"};;

`;
