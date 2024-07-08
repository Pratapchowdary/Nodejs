import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="login">
        <h1>College LOG IN</h1>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <Link to="/registration" style={btnSubmit}>
            Submit
          </Link>
    </div>
    </div>
  );
}
const btnSubmit = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  borderRadius: '20px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  transition: 'background-color 0.3s',
  left:'45px',
};

export default Login;
