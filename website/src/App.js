import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio"

function App() {
  return (
    <React.Fragment>
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
