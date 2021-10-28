import React, { Component } from 'react';
import NavMenu from '../NavMenu';
import './styles.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <body>
        <aside id="sidebar">
          <NavMenu />
        </aside>
        <main id="content">
          {this.props.children}
        </main>
      </body>
    );
  }
}
