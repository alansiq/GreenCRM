import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}
