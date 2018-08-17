
import React, { Component } from 'react';
import FootBallers from './components/footballers'

class App extends Component {

  state = {
    soccerPlayers : [
      {id: 1, name: "Christiano Ronaldo" , position: "Right Forward" , club: "Juventus"},
      {id: 2,name: "Rooney" , position: "Forward" , club: "Manchester United"},
      {id: 3,name: "Sergio Ramos" , position: "Center Back" , club: "Real Madrid"},
    ]
  }
  render() {
    return (
      <div className="App" style={{textAlign : 'center'}}>
        <header className="App-header">
          <h1 className="App-title">Welcome to My React App</h1>
        </header>
        <FootBallers soccerPlayers={this.state.soccerPlayers} />
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
