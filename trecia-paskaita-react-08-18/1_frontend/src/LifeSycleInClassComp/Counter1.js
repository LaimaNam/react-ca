import React, { Component } from 'react';
import Counterbutton from './Counterbutton';

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('Counter1: render');
    return (
      <>
        <h2>Counter 1</h2>
        <p>Button clicked: {this.state.count} times</p>
        <Counterbutton someFunc={() => this.increment()} />
      </>
    );
  }

  componentDidMount() {
    console.log('Counter1: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Counter1: componentDidUpdate');
  }
}

export default Counter1;
