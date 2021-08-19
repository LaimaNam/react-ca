import React, { Component } from 'react';
import ClassTodo from './ClassTodo';

class ClassTodos extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [], isLoading: true };
  }

  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h2>Todos</h2>
        {this.state.todos.slice(0, 5).map((todo) => (
          <ClassTodo key={todo.id} todo={todo} todolist="First list" />
        ))}
        {this.state.todos.slice(6, 10).map((todo) => (
          <ClassTodo key={todo.id} todo={todo} todolist="Second list" />
        ))}
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data, isLoading: false }));
  }
}

export default ClassTodos;
