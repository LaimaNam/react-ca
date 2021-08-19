import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  render() {
    return (
      <section>
        <h2>Users</h2>
        {this.state.users.map((user) => (
          <User userItem={user} key={user.id} />
        ))}
      </section>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }
}

export default Users;
