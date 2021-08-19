import React, { Component } from 'react';
import ClassButton from './ClassButton';

export class ClassDiv extends Component {
  render() {
    const { contentH3, contentP } = this.props;

    return (
      <>
        <h3>{contentH3}</h3>
        <p>{contentP}</p>
        <ClassButton textContent="I am ClassButton - Click me!" />
      </>
    );
  }
}

export default ClassDiv;
