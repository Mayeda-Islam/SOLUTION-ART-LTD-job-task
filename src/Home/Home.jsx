import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const Home = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [currentId, setCurrentId] = useState(1);
  const [participantName, setParticipantName] = useState("");
  const [participantNo, setParticipantNo] = useState("");
  const [participateAt, setParticipateAt] = useState("");
  const [score, setScore] = useState("");
  const [allPlayer, setAllPlayer] = useState([]);

  const handleUpdate = (updatedPlayer) => {
    const updatedIndex = allPlayer?.findIndex(
      (player) => player?.participantId === updatedPlayer?.participantId
    );
    if (updatedIndex !== -1) {
      const updatedPlayers = [...allPlayer];
      updatedPlayers[updatedIndex] = updatedPlayer;
      setAllPlayer(updatedPlayers);
    }
    setEditIndex(null);
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
            <select
              value={participantNo}
              onChange={(e) => setParticipantNo(e.target.value)}
            >
              <option value="">Select an activity</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="racing car">Racing Car</option>
              <option value="bike racing">Bike Racing</option>
            </select>
          </label>
          <br />
          <label>
            Participate At:
            <input
              type="date"
              value={participateAt}
              onChange={(e) => setParticipateAt(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Score:
            <input
              min="0"
              max="10"
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
        // setFilterByParticipateAt={setFilterByParticipateAt}
        score={score}
        setParticipantName={setParticipantName}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        allPlayer={allPlayer}
      ></PlayerCard>
    </>
  );
};

export default Home;
