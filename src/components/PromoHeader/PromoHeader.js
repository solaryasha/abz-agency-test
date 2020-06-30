
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { DesktopOnly } from '../../containers/DesktopOnly';
import { HamburgerMenu } from '../../UI/HamburgerMenu/HamburgerMenu';
import './PromoHeader.scss';
import { PaddingContainer } from '../../containers/PaddingContainer';
import { SideBar } from '../SideBar/SideBar';

export class PromoHeader extends Component {
  state= {
    sidebarOpen: null,
  }

  menuClickHandler = () => {
    this.setState({ sidebarOpen: true });
  }

  render() {
    const { sidebarOpen } = this.state;

    return (
      <>
        <PaddingContainer>
          <div className="promo__header">
            <Logo />
            <DesktopOnly>
              <Navigation />
            </DesktopOnly>
            <HamburgerMenu onClick={this.menuClickHandler} />
          </div>
        </PaddingContainer>
        <SideBar isOpen={sidebarOpen} />
      </>
    );
  }
}

PromoHeader.propTypes = {
  
};
