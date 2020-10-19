import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';
class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content:'Play Fifa'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo= {this.deleteTodo}/>
        <AddTodo />
      </div>
    );
  }
}

export default App;
