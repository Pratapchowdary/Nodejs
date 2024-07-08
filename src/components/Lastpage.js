import React from "react";
import { Link } from "react-router-dom";

const Lastpage = () => {
  return (
      <div className="container">
        <h1>Succesfully submitted your details</h1>
        <h2>Thank you for visting our website</h2>
        <Link to="/welcomepage" style={btnSubmit}>
            Home
          </Link>
          {/* <Link className="btn" to="/welcomepage" >
            WelcomePage
          </Link> */}
    </div>
    
  );
};
const btnSubmit = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: 'green',
  borderRadius: '20px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  transition: 'background-color 0.3s',
  right:'45px'
  
};



export default Lastpage;