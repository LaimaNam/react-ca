import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    // if (this.state.count === 0) return;
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Class Counter: {this.state.count} </h2>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>

        {/* works with binded this  */}
        {/* <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button> */}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
}

export default ClassCounter;
