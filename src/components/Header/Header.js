import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { DesktopOnly } from '../../containers/DesktopOnly';
import { Navigation } from '../Navigation/Navigation';
import { HamburgerMenu } from '../../UI/HamburgerMenu/HamburgerMenu';

export class Header extends Component {
  state= {
    sidebarOpen: null,
  }

  menuClickHandler = () => {
    this.setState({ sidebarOpen: true });
  }

  menuCloseHandler = () => {
    this.setState({ sidebarOpen: false });
  }

  render() {
    const { sidebarOpen } = this.state;

    return (
      <div className="header">
        <Logo />
        <DesktopOnly>
          <Navigation onClick={this.menuCloseHandler} />
        </DesktopOnly>
        <HamburgerMenu onClick={this.menuClickHandler} />
      </div>
    );
  }
}

Header.propTypes = {

};
