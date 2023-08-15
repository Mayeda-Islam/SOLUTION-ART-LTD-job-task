/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const PlayerCard = ({ allPlayer, handleUpdate, handleDelete }) => {
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
              <td>{player.participantName}</td>
              <td>{player.participantNo}</td>
              <td>{player.participateAt}</td>
              <td>{player.score}</td>
              <td>
                <button onClick={() => handleUpdate(player?.participantId)}>
                  Edit
                </button>{" "}
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
