import React, { Component } from 'react';

class Counterbutton extends Component {
  render() {
    console.log('Counterbutton: render');

    return <button onClick={() => this.props.someFunc()}>Action</button>;
  }

  componentDidMount() {
    console.log('Counterbutton: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Counterbutton: componentDidUpdate');
  }
}

export default Counterbutton;
