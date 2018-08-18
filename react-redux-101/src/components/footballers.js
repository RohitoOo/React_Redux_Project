import React from 'react';

const FootBallers = ({soccerPlayers}) => {


  const players = soccerPlayers.map( (player) => {
    return  (
        <tr key={player.id}>
            <td >{player.name}</td>
            <td >{player.position}</td>
            <td >{player.club}</td>
        </tr>

    )
 })

  return (
  <div>
    <table>
      <tbody>
      <tr>
        <th>Soccer Player</th>
        <th>Position</th>
        <th>Club</th>
      </tr>
          { players }
    </tbody>
  </table>
  </div>
)}

export default FootBallers;
