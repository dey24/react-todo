import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content:'Play Fifa'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo= {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
