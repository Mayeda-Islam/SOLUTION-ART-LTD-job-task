/* eslint-disable react/prop-types */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const PlayerCard = ({
  score,

  editIndex,
  allPlayer,
  handleUpdate,
  handleDelete,
  setEditIndex,
}) => {
  const [filterByParticipateAt, setFilterByParticipateAt] = useState("");
  const [error, setError] = useState("");
  console.log(filterByParticipateAt);
  const [updatedPlayer, setUpdatedPlayer] = useState({});
  const handleEdit = (index, player) => {
    setEditIndex(index);
    setUpdatedPlayer(player);
  };
  const handleValidateAndUpdate = () => {
    setError("");
    if (updatedPlayer?.score < 0 || updatedPlayer?.score > 10) {
      setError("Please enter a number between 0 and 10.");
      return;
    }
    handleUpdate(updatedPlayer);
  };
  let filterData = [];
  if (filterByParticipateAt && allPlayer?.length) {
    filterData = allPlayer?.filter(
      (player) =>
        filterByParticipateAt === "" ||
        player.participantNo === filterByParticipateAt
    );
    console.log(filterData);
  } else {
    filterData = allPlayer;
  }
  console.log(filterData);
  return (
    <div>
      <h2>allPlayer Table</h2>
      <div>
        Filter by participateAt:
        <select onChange={(e) => setFilterByParticipateAt(e.target.value)}>
          <option value="">Select an activity</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="racing car">Racing Car</option>
          <option value="bike racing">Bike Racing</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>allPlayer No</th>
            <th>allPlayer Name</th>
            <th>Participate On</th>
            <th>allPlayer At</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((player, index) => (
            <tr key={index}>
              <td>{player?.participantId}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={updatedPlayer?.participantName}
                    onChange={(e) =>
                      setUpdatedPlayer({
                        ...updatedPlayer,
                        participantName: e.target.value,
                      })
                    }
                    required
                  />
                ) : (
                  player?.participantName
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="date"
                    value={updatedPlayer?.participantNo}
                    onChange={(e) =>
                      setUpdatedPlayer({
                        ...updatedPlayer,
                        participantNo: e.target.value,
                      })
                    }
                  />
                ) : (
                  player?.participantNo
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <select
                    value={updatedPlayer?.participateAt}
                    onChange={(e) =>
                      setUpdatedPlayer({
                        ...updatedPlayer,
                        participateAt: e.target.value,
                      })
                    }
                  >
                    <option value="">Select an activity</option>
                    <option value="cricket">Cricket</option>
                    <option value="football">Football</option>
                    <option value="racing car">Racing Car</option>
                    <option value="bike racing">Bike Racing</option>
                  </select>
                ) : (
                  player?.participateAt
                )}
              </td>

              <td>
                {editIndex === index ? (
                  <>
                    {" "}
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={updatedPlayer?.score}
                      onChange={(e) =>
                        setUpdatedPlayer({
                          ...updatedPlayer,
                          score: e.target.value,
                        })
                      }
                      required
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </>
                ) : (
                  player.score
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={() => handleValidateAndUpdate()}>
                      update
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(index, player)}>
                    Edit
                  </button>
                )}

                <button onClick={() => handleDelete(player?.participantId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerCard;
