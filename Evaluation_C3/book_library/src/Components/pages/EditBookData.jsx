// import axios from "axios";
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const {divdata} = useContext(AuthContext)
  const [thumbnailUrl,setthumbnailUrl] = useState("");
  const[longDescription,setlongDescription] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    if(thumbnailUrl&&longDescription){
      upadtedata(thumbnailUrl,longDescription)
    }
    
  };

  const upadtedata = async()=>{
    let res = await fetch (`http://localhost:8080/books/${divdata}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        thumbnailUrl,longDescription
      })
    })
    let data = await res.json()
    console.log(data)
  }

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          value={thumbnailUrl}
          onChange={(e) => setthumbnailUrl(e.target.value)}
        />
        <br />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          value={longDescription}
          onChange={(e) => setlongDescription(e.target.value)}
        />
        <br />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
