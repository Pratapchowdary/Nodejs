import React from "react";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
      <div style={styles.imageContainer}>
          <img src={'https://t3.ftcdn.net/jpg/02/90/89/76/240_F_290897614_7RdAsk2GmumcGWZ2qklmV74hKlNmznSx.jpg'} alt="Image" style={styles.image} />
        </div>
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
    background: "orange",
  },
  content: {
    textAlign: "center",
    maxWidth: "600px",
  },
  buttonContainer: {
    marginTop: "30px",
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
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Welcomepage;
