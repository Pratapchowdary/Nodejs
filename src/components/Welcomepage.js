import React from "react";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Welcome to our Website!</h1>
        <p>Please sign in to continue.</p>
        <div style={styles.buttonContainer}>
          <Link to="/login" style={styles.button}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    background: "#f0f0f0",
  },
  content: {
    textAlign: "center",
    maxWidth: "600px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  imageContainer: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "80%",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Welcomepage;
