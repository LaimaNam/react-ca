import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name, email } = this.props.userItem;
    return (
      <ul>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    );
  }
}

export default User;
