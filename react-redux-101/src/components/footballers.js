// import React, { Component } from 'react';
//
//
//
// class FootBallers extends Component {
//
//   render() {
//     return (
//       <div>
//
//         <table>
//           <tbody>
//           <tr>
//             <th>Soccer Player</th>
//             <th>Position</th>
//             <th>Club</th>
//           </tr>
//          {this.props.soccerPlayers.map( (player) => {
//           return  <tr key={player.id}>
//                     <td >{player.name}</td>
//                     <td >{player.position}</td>
//                     <td >{player.club}</td>
//                     </tr>
//         })}
//         </tbody>
//       </table>
//       </div>
//     );
//   }
//
// }
//
// export default FootBallers;



import React from 'react';

const FootBallers = (props) => {
  return (
  <div>
    <table>
      <tbody>
      <tr>
        <th>Soccer Player</th>
        <th>Position</th>
        <th>Club</th>
      </tr>
     {props.soccerPlayers.map( (player) => {
      return  <tr key={player.id}>
                <td >{player.name}</td>
                <td >{player.position}</td>
                <td >{player.club}</td>
                </tr>
    })}
    </tbody>
  </table>
  </div>
)}

export default FootBallers;
