
import React, { Component } from 'react';
import { Logo } from '../../Logo/Logo';
import { Navigation } from '../../Navigation/Navigation';
import { DesktopOnly } from '../../../containers/DesktopOnly';
import { HamburgerMenu } from '../../../UI/HamburgerMenu/HamburgerMenu';
import './PromoHeader.scss';
import { PaddingContainer } from '../../../containers/PaddingContainer';
import { SideBar } from '../../SideBar/SideBar';

export class PromoHeader extends Component {
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
      <>
        {/* <PaddingContainer> */}
        <div className="promo__header">
          <Logo />
          <DesktopOnly>
            <Navigation onClick={this.menuCloseHandler} />
          </DesktopOnly>
          <HamburgerMenu onClick={this.menuClickHandler} />
        </div>
        {/* </PaddingContainer> */}
        <SideBar
          isOpen={sidebarOpen}
          onClick={this.menuCloseHandler}
        />
      </>
    );
  }
}

PromoHeader.propTypes = {
  
};
