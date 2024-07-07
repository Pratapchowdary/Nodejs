import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Even from "./components/Even";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberGame from "./components/NumberGame";
import Counter from "./components/Counter";
import Login from "./components/Login";
import RegistrationForm from "./components/Registration";
import Welcomepage from "./components/Welcomepage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/even" element={<Even />} />
          <Route path="/game" element={<NumberGame />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="" element={<Welcomepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
