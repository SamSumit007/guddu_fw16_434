import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";

function Login() {
  const { token, login } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state.from.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
