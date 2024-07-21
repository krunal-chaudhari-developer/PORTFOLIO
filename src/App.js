import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
};

export default App;
