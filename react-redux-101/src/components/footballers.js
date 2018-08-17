import React from 'react';

const FootBallers = ({soccerPlayers}) => {
  return (
  <div>
    <table>
      <tbody>
      <tr>
        <th>Soccer Player</th>
        <th>Position</th>
        <th>Club</th>
      </tr>
     {soccerPlayers.map( (player) => {
       return player.club == "Manchester United" ? (
           <tr key={player.id}>
                   <td >{player.name}</td>
                   <td >{player.position}</td>
                   <td >{player.club}</td>
                   </tr>

       ) : null


    })}
    </tbody>
  </table>
  </div>
)}

export default FootBallers;
