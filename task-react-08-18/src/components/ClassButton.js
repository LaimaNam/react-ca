import React, { Component } from 'react';

export class ClassButton extends Component {
  render() {
    return <button>{this.props.textContent}</button>;
  }
}

export default ClassButton;
