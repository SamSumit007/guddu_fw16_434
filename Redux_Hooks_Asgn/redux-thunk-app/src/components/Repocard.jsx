import React from "react";

export const Repocard = (props) => {
  const { name, description, visibility, language } = props;
  return (
    <div style={{ borderBottom: "solid gray 3px", padding: "5px 10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{name}</h3>
        <p
          style={{
            marginRight: "50px",
            backgroundColor: "gray",
            padding: "5px 15px",
            borderRadius: "15px",
          }}
        >
          {visibility}
        </p>
      </div>
      <p>{description}</p>
      <p>{language}</p>
    </div>
  );
};
