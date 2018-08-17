
import React, { Component } from 'react';
import FootBallers from './components/footballers'
import AddPlayer from './components/AddPlayer'

import "./static/styles.css"

class App extends Component {

  state = {
    soccerPlayers : [
      {id: 1, name: "Christiano Ronaldo" , position: "Right Forward" , club: "Juventus"},
      {id: 2,name: "Rooney" , position: "Forward" , club: "Manchester United"},
      {id: 3,name: "Sergio Ramos" , position: "Center Back" , club: "Real Madrid"},
    ]
  }

   handleSubmit = (e) => {
     e.preventDefault()

    var newPlayer = {
      id: Date.now(),
      name: e.target.name.value,
      position: e.target.position.value,
      club: e.target.club.value
    }

    var soccerPlayers = this.state.soccerPlayers;
    soccerPlayers.push(newPlayer)
    this.setState({
      soccerPlayers : soccerPlayers
    })
  }

  render() {
    return (
      <div className="App" style={{textAlign : 'center'}}>
        <header className="App-header">
          <h1 className="App-title">Create Your Dream Team [React App] </h1>
        </header>
        <FootBallers soccerPlayers={this.state.soccerPlayers} />
        <AddPlayer  abc={"123"} handleSubmited={this.handleSubmit} />

      </div>
    );
  }
}

export default App;


// Container Component (Class Component) VS UI Component

// Container Component
// 1. Contain State
// 2. Contain Life cycle hooks
// 3. Not Concerned with UI
// 4. Use Classe to create these components
//
// UI Components
// 1. Does not contain State ( rec data from Container Comp)
// 2. Receive Data from props
// 3. Only concerned with UI
// 4. Use Functions instead of classses to create these compoenets
