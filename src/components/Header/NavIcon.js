import React, { Component } from 'react';

export class NavIcon extends Component {
  render() {
    return <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox={this.props.viewBox}>{this.props.svg}</svg>
}
}

NavIcon.defaultProps = { viewBox: "0 0 512 512" };

