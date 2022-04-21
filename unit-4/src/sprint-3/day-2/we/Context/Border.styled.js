import styled from "styled-components";

export const Border = styled.div`
margin:auto;
border: solid black 1px;
padding:10px;
// background-color:black;
color:${({color})=>color}
background-color: ${({color})=> color ==="white"?"black":"white"}
`; 