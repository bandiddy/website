import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio"
import Extra from "./Components/Extra"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <About />
      <Extra />
      <Skills />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
