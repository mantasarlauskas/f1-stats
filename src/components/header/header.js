import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import F1Logo from '../../img/f1_logo.svg';
import Menu from '../menu';
import './styles.scss';

const smallSize = 576;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setShowMenu(window.innerWidth > smallSize ? false : showMenu);
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
      {(showMenu || width > smallSize) && <Menu onClose={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
