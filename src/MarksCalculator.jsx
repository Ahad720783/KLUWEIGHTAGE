import React, { useState } from "react";

export default function MarksCalculator() {
  const [totalMarks, setTotalMarks] = useState(""); // new input
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [weightage, setWeightage] = useState(""); // optional weight factor
  const [result, setResult] = useState("");

  const calculate = () => {
    if (!totalMarks || !obtainedMarks || !weightage) {
      setResult("Please enter all fields!");
      return;
    }

    const total = parseFloat(totalMarks);
    const obtained = parseFloat(obtainedMarks);
    const w = parseFloat(weightage);

    const weightedScore = (obtained / total) * w;

    setResult(`Your weightage is: ${weightedScore.toFixed(4)}`);
  };

  return (
    <div className="calculator-container">
      <h2>Marks Weightage Calculator</h2>

      <input
        type="number"
        placeholder="Enter Total Marks of Exam"
        value={totalMarks}
        onChange={(e) => setTotalMarks(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Marks Obtained"
        value={obtainedMarks}
        onChange={(e) => setObtainedMarks(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Weightage Factor (e.g., 12)"
        value={weightage}
        onChange={(e) => setWeightage(e.target.value)}
      />

      <button onClick={calculate}>Calculate</button>

      {result && <h3 className="result">{result}</h3>}
    </div>
  );
}
