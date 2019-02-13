import React from 'react';
import F1Logo from '../../img/f1_logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import './styles.scss';

export default () => (
  <nav className={'nav'}>
    <Link to={'/'}>
      <F1Logo className={'nav__logo'} />
    </Link>
    <Menu />
  </nav>
);

