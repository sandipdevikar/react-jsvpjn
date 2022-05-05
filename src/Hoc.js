import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      counter: 0,
    };
    increamentCount = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <WrappedComponent
          increamentCount={this.increamentCount}
          counter={this.state.counter}
        />
      );
    }
  }

  return HOC;
};

export default higherOrderComponent;
