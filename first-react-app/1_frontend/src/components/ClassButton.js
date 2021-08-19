import React from 'react';

class ClassButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      anotherCount: 10,
    };
  }

  clickHandler() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ anotherCount: this.state.anotherCount - 1 });
  }

  render() {
    return (
      <button onClick={() => this.clickHandler()}>
        Class component {this.state.count}:{this.state.anotherCount}
      </button>
    );
  }
}

export default ClassButton;
