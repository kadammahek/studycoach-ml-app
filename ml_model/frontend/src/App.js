import React, { useState } from "react";
import "./App.css";

function App() {
  const [studyHours, setStudyHours] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [revisionCount, setRevisionCount] = useState("");
  const [attendance, setAttendance] = useState("");
  const [assignmentsDone, setAssignmentsDone] = useState("");
  const [predictedScore, setPredictedScore] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPredictedScore(null);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/predict?study_hours=${studyHours}&sleep_hours=${sleepHours}&revision_count=${revisionCount}&attendance=${attendance}&assignments_done=${assignmentsDone}`
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setPredictedScore(data.predicted_score);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch prediction. Make sure the backend is running.");
    }
  };

  return (
    <div className="App">
      <h1>Study Coach AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Study Hours"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Sleep Hours"
          value={sleepHours}
          onChange={(e) => setSleepHours(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Revision Count"
          value={revisionCount}
          onChange={(e) => setRevisionCount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Attendance"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Assignments Done"
          value={assignmentsDone}
          onChange={(e) => setAssignmentsDone(e.target.value)}
          required
        />
        <button type="submit">Predict Score</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {predictedScore !== null && (
        <p>Your predicted score is: {predictedScore.toFixed(2)}</p>
      )}
    </div>
  );
}

export default App;
