/* eslint-disable react/prop-types */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const PlayerCard = ({
  editIndex,
  allPlayer,
  handleUpdate,
  handleDelete,
  setEditIndex,
}) => {
  const [updatedPlayer, setUpdatedPlayer] = useState({});
  const handleEdit = (index, player) => {
    setEditIndex(index);
    setUpdatedPlayer(player);
  };
  return (
    <div>
      <h2>allPlayer Table</h2>

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
          {allPlayer?.map((player, index) => (
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
                  player.participantName
                )}
              </td>

              <td>
                {editIndex === index ? (
                  <select
                    value={updatedPlayer?.participateNo}
                    onChange={(e) =>
                      setUpdatedPlayer({
                        ...updatedPlayer,
                        participateNo: e.target.value,
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
                  player.participateAt
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="date"
                    value={updatedPlayer?.participantAt}
                    onChange={(e) =>
                      setUpdatedPlayer({
                        ...updatedPlayer,
                        participantNo: e.target.value,
                      })
                    }
                  />
                ) : (
                  player?.participantAt
                )}
              </td>
              <td>
                {editIndex === index ? (
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
                  />
                ) : (
                  player.score
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={() => handleUpdate(updatedPlayer)}>
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
