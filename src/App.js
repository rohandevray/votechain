import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ElectionCard from "./components/ElectionCard";
import { Route, Routes } from "react-router-dom";
import SingleElection from "./components/SingleElection";

function App() {
  return (
    <div className="App">
      <Nav />
      <ElectionCard />
      <h1>Hello React</h1>
      <Routes>
        <Route path="/election/:electionid" element={SingleElection}></Route>
      </Routes>
    </div>
  );
}

export default App;
