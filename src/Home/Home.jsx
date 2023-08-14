import React, { useState } from "react";

const Home = () => {
  const [currentId, setCurrentId] = useState(1);
  const [participantName, setParticipantName] = useState("");
  const [participantNo, setParticipantNo] = useState("");
  const [participateAt, setParticipateAt] = useState("");
  const [score, setScore] = useState("");

  //generate id
  function generateProductId(currentId) {
    const paddedId = String(currentId).padStart(3, "0");
    return `p-${paddedId}`;
  }
  const handleGenerateId = () => {
    const newId = generateProductId(currentId);
    setCurrentId(currentId + 1);
    return newId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const participantId = handleGenerateId();
    // Do something with the form data, e.g., send it to a server or perform validation
    console.log({
      participantId,
      participantName,
      participantNo,
      participateAt,
      score,
    });

    // Clear the form fields

    setParticipantName("");
    setParticipantNo("");
    setParticipateAt("");
    setScore("");
  };
  return (
    <div>
      <h2>Participant Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Serial Number:
          <input type="text" readOnly required />
        </label>
        <br />
        <label>
          Participant Name:
          <input
            type="text"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Participate On:
          <input
            type="text"
            value={participantNo}
            onChange={(e) => setParticipantNo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Participate At:
          <input
            type="text"
            value={participateAt}
            onChange={(e) => setParticipateAt(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Score:
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;