import React, { Component } from 'react';
import './ClassCounter.css';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, message: '' };
  }

  clickHandler(action) {
    if (this.state.count < 10 || action === 'decrement') {
      switch (action) {
        case 'increment':
          this.setState({ count: this.state.count + 1 });
          break;
        case 'decrement':
          this.setState({ count: this.state.count - 1 });
          if (this.state.count === 10) this.setState({ message: '' });

          break;
        default:
          return;
      }
    } else {
      this.setState({ message: 'You reached maximum count' });
    }
  }

  render() {
    console.log('render');
    return (
      <div>
        <h2>Class component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.clickHandler('increment')}>+1</button>
        <button onClick={() => this.clickHandler('decrement')}>-1</button>
        <p>{this.state.message}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount: After creating component');
  }

  componentDidUpdate() {
    console.log(
      'componentDidUpdate: After updating component(state and props)'
    );
  }
}

export default ClassCounter;
