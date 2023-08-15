import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const Home = () => {
  const [currentId, setCurrentId] = useState(1);
  const [participantName, setParticipantName] = useState("");
  const [participantNo, setParticipantNo] = useState("");
  const [participateAt, setParticipateAt] = useState("");
  const [score, setScore] = useState("");
  const [allPlayer, setAllPlayer] = useState([]);

  const handleUpdate = (id) => {
    console.log(id, "from update");
  };
  const handleDelete = (id) => {
    const filteringPlayer = allPlayer?.filter(
      (player) => player?.participantId !== id
    );
    setAllPlayer(filteringPlayer);
  };

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
    const data = {
      participantId,
      participantName,
      participantNo,
      participateAt,
      score,
    };

    setAllPlayer([...allPlayer, data]);

    // Clear the form fields

    setParticipantName("");
    setParticipantNo("");
    setParticipateAt("");
    setScore("");
  };
  console.log(allPlayer, "line 35");
  return (
    <>
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
      <PlayerCard
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        allPlayer={allPlayer}
      ></PlayerCard>
    </>
  );
};

export default Home;
