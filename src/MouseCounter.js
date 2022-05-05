import React from 'react';
import higherOrderComponent from './Hoc';
class MouseCounter extends React.Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.increamentCount}>
          Click - {this.props.counter}
        </button>
      </div>
    );
  }
}

export default higherOrderComponent(MouseCounter);
