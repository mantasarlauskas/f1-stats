import React from 'react';
import F1Logo from '../../img/f1_logo.svg';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import './styles.scss';

export default () => (
  <header className={'header'}>
    <Link to={'/'}>
      <F1Logo className={'header__logo'} />
    </Link>
    <Menu />
  </header>
);

