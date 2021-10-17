import React, { Component } from 'react';
import { NavMenu } from '../NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <body>
        <NavMenu />
          {this.props.children}
      </body>
    );
  }
}
