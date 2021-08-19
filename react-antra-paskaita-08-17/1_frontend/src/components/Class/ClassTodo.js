import React, { Component } from 'react';

export class ClassTodo extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { todo, todolist } = this.props;

    return (
      <ul key={todo.id}>
        <strong>{todolist}</strong>
        <li>{todo.title}</li>
        <li>{todo.completed ? 'completed' : 'not completed'}</li>
      </ul>
    );
  }
}

export default ClassTodo;
