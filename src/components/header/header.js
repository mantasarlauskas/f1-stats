import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import F1Logo from '../../img/f1_logo.svg';
import Menu from '../menu';
import './styles.scss';

const largeSize = 1200;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    setShowMenu(window.innerWidth > largeSize ? false : showMenu);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={'header'}>
      <FaBars onClick={() => setShowMenu(!showMenu)} className={'header__bars'} />
      <Link onClick={() => setShowMenu(false)} to={'/'} className={'header__logo'}>
        <F1Logo />
      </Link>
      <Menu showMenu={showMenu} onClose={() => setShowMenu(false)} />
    </header>
  );
};

export default Header;
