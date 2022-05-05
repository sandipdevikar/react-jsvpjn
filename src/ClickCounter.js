import React from 'react';
import higherOrderComponent from './Hoc'
class ClickCounter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increamentCount}>
          Click - {this.props.counter}
        </button>
      </div>
    );
  }
}

export default higherOrderComponent(ClickCounter)

