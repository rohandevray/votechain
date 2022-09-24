import React from "react";
import "./SingleElection.css";
import { useState } from "react";
import OptionCard from "./OptionCard";

export default function SingleElection() {
  const [candidates, setCandidates] = useState([]);

  return (
    <div>
      <h2>Election Name</h2>
      <p>Election description</p>

      {candidates.map((index, el) => {
        <OptionCard index={index} candiName={el} />;
      })}
    </div>
  );
}
