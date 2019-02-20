import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import F1Logo from '../../img/f1_logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState(({ showMenu }) => ({
      width: window.innerWidth,
      showMenu: window.innerWidth > 576 ? false : showMenu
    }));
  };

  toggleMenu = () => {
    this.setState(({ showMenu }) => ({
      showMenu: !showMenu
    }));
  };

  render() {
    const { showMenu, width } = this.state;
    return (
      <header className={'header'}>
        <FaBars onClick={this.toggleMenu} className={'header__bars'} />
        <Link to={'/'} className={'header__logo'}>
          <F1Logo />
        </Link>
        {(showMenu || width > 576) && <Menu />}
      </header>
    );
  }
}


export default Header;

