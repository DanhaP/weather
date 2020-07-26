import React from "react";
import { BrowserRouter } from "react-router-dom";
//import Header from "./components/Header";
import RouterApp from './RouterApp';
import "./App.css";

function App() {
  //const cityName = "Seoul";
  return (
    <BrowserRouter>
      <RouterApp/>
    </BrowserRouter>
  );
}

export default App;
