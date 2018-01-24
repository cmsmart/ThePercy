import React, { Component } from 'react'

export class LabelAsPoint extends Component {
  onClick = () => {
      const { payload } = this.props;
      // you can do anything with the key/payload
  }
  render() {
      const { x, y } = this.props;
      return (
          <circle
              className={`${styles.dot}`}
              onClick={this.onClick}
              cx={x}
              cy={y}
              r={8}
              fill="transparent"/>
      );
  }
}