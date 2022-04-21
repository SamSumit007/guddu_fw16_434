import React, { useContext, useState } from "react";
import { AuthContextProvider } from "./AuthContextProvider";

function Navbar() {
  const { isAuth,Login,LoggedOut } = useContext(AuthContextProvider);

  return (
    <>
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        margin: "1% 3%",
      }}
    >
      <div style={{ border: "solid white 1px", width: "150px" }}>Masai</div>
      <div style={{ border: "solid white 1px", width: "150px" }}>Search</div>
      <div
        style={{
          width: "150px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {isAuth ? (
          <div>
            <button
              onClick={() => {
                LoggedOut();
              }}
            >
              Log_Out
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {"";
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Navbar;
