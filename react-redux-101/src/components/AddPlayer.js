import React from 'react';

const AddPlayer = (props) => {

function handleSubmit(e){
  e.preventDefault()
  props.handleSubmited(e)
}

return  (<div>

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Soccer Player" />
      <br/>
      <input type="text"  name="position" placeholder="Player's Position" />
      <br/>
      <select id="club" name="club">
        <option value="Manchester United">Manchester United</option>
        <option value="Juventus">Juventus</option>
        <option value="Real Madrid">Real Madrid</option>
        <option value="Real Madrid">Chelsea</option>
        <option value="Real Madrid">Arsenal</option>
        <option value="Real Madrid">Barcelona</option>
      </select>
      <button> Add Player </button>
    </form>

  </div>
)};

export default AddPlayer
